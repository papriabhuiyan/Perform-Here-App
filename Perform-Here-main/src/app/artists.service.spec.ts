import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Artist } from './artist';
import { of, throwError } from 'rxjs';
import { ArtistsService } from './artists.service';
import { ArtistForm } from './artistForm';

describe('ArtistsService', () => {
  let service: ArtistsService;
  let baseUrl: string = "http://960169performhereapi-env.eba-yairqaej.us-west-2.elasticbeanstalk.com/perfArtists/";
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let fakeArtists = [
    new Artist('fake@email', 'fakeStage', 'fakeDescription'),
    new Artist('other@id', 'fakeArtist', 'description')
  ];

  let fakeArtist = new Artist('fake@email', 'fakeStage', 'fakeDescription');
  let fakeForm = new ArtistForm('fakeId', 'fakeFirst', 'fakeLast', 'fakeStage', 'fakeEmail', 'fakeManagement', 'fakePhone');

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'put']);
    httpClientSpy.post.and.returnValue(of(fakeArtist));
    httpClientSpy.get.and.returnValue(of(fakeArtists));
    httpClientSpy.put.and.returnValue(of(fakeArtist));
    
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.inject(ArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post to the correct url', () => {
    const body = {
      "id": fakeArtist.id,
      "stageName": fakeArtist.stageName,
      "description": fakeArtist.description,
    }

    service.addArtist(fakeArtist).subscribe(
      res => expect(res).toEqual(fakeArtist)
    );

    expect(httpClientSpy.post).toHaveBeenCalledWith(baseUrl+"add", body, jasmine.any(Object));
  });

  it('getAllArtists should make an http GET request to correct url', () => {
    service.getAllArtists().subscribe(
      res => expect(res).toEqual(fakeArtists)
    );

    expect(httpClientSpy.get).toHaveBeenCalledWith(baseUrl+"all");
  });

  it('getArtistsById should make an http GET request with correct url', () => {
    httpClientSpy.get.and.returnValue(of(fakeArtist));
    service.getArtistById('fake@email').subscribe(
      res => expect(res).toEqual(fakeArtist)
    );

    expect(httpClientSpy.get).toHaveBeenCalledWith(baseUrl+'fake@email', jasmine.any(Object));
  });

  it('addArtistForm should post to the correct url', () => {
    httpClientSpy.post.and.returnValue(of(fakeForm));
    const body = {
      "artistid": fakeForm.artistID,
      "firstname": fakeForm.firstname,
      "lastname": fakeForm.lastname,
      "stagename": fakeForm.stagename,
      "accountemail": fakeForm.accountemail,
      "managementemail": fakeForm.managementemail,
      "phoneno": fakeForm.phoneno
    }

    service.addArtistForm(fakeForm).subscribe(
      res => expect(res).toEqual(fakeForm)
    );
    
    expect(httpClientSpy.post).toHaveBeenCalledWith("https://o6xu4u1o3b.execute-api.us-west-2.amazonaws.com/default/960148_formPost", body, jasmine.any(Object));
  });

  it('should handle errors', (done: DoneFn) => {
    const errorResponse0 = new HttpErrorResponse({
      error: "test 0 status error",
      status: 0,
      statusText: "0 Error"
    });
    httpClientSpy.get.and.returnValue(throwError(()=>errorResponse0));

    service.getAllArtists().subscribe({
      next: artist => done.fail("expected an error"),
      error: error => {
        expect(error.message).toEqual('Something bad happened; please try again later.');
        done();
      }
    });
  });
});
