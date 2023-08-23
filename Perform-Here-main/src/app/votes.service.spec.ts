import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Votes } from './votes';
import { of, throwError } from 'rxjs';

import { VotesService } from './votes.service';

describe('VotesService', () => {
  let service: VotesService;
  let baseUrl: string = "http://960169performhereapi-env.eba-yairqaej.us-west-2.elasticbeanstalk.com/votes/";
  let httpClientSpy: jasmine.SpyObj<HttpClient>; 

  let fakeVotes = [
    new Votes('fake@email', 'fakeStage', 'fakeState', 'fakeCity', 'fakeDiscount'),
    new Votes(null, 'fakeArtist', 'state', 'city', 'code')
  ];

  let fakeVote = new Votes('fake@email', 'fakeStage', 'fakeState', 'fakeCity', 'fakeDiscount');

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'put']);
    httpClientSpy.post.and.returnValue(of(fakeVote));
    httpClientSpy.get.and.returnValue(of(fakeVotes));
    httpClientSpy.put.and.returnValue(of(fakeVote));
    

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.inject(VotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post to the correct url', () => {
    const body = {
      "userId": fakeVote.userId,
      "artistName": fakeVote.artistName,
      "state": fakeVote.state,
      "city": fakeVote.city,
      "discountCode": "Not Applicable"
    }

    service.addVote(fakeVote).subscribe(
      res => expect(res).toEqual(fakeVote)
    );

    expect(httpClientSpy.post).toHaveBeenCalledWith(baseUrl+"add", body, jasmine.any(Object));
  });

  it('getAllVotes should make an http GET request to correct url', () => {
    service.getAllVotes().subscribe(
      res => expect(res).toEqual(fakeVotes)
    );

    expect(httpClientSpy.get).toHaveBeenCalledWith(baseUrl+"all");
  });

  it('getVotesByUser should make an http GET request with correct url', () => {
    service.getVotesByUser('fake@email').subscribe(
      res => expect(res).toEqual(fakeVotes)
    );

    expect(httpClientSpy.get).toHaveBeenCalledWith(baseUrl+"user/"+'fake@email');
  });

  it('getVotesForArtist should make an http GET request with correct url', () => {
    service.getVotesForArtist('fakeStage').subscribe(
      res => expect(res).toEqual(fakeVotes)
    );

    expect(httpClientSpy.get).toHaveBeenCalledWith(baseUrl+"artist/"+'fakeStage');
  });

  it('updateVotes should make and http put request with the correct url', () => {
    service.updateVotes(fakeVote.artistName, fakeVote.state, fakeVote.city, fakeVote.discountCode).subscribe(
      res => expect(res).toEqual(fakeVote)
    );

    expect(httpClientSpy.put).toHaveBeenCalledWith(baseUrl+"artist/"+fakeVote.artistName+"/"+fakeVote.state+"/"+fakeVote.city+"/"+fakeVote.discountCode, {}, jasmine.any(Object));
  });

  it('should handle errors', (done: DoneFn) => {
    const errorResponse0 = new HttpErrorResponse({
      error: "test 0 status error",
      status: 0,
      statusText: "0 Error"
    });
    httpClientSpy.get.and.returnValue(throwError(()=>errorResponse0));

    service.getAllVotes().subscribe({
      next: vote => done.fail("expected an error"),
      error: error => {
        expect(error.message).toEqual('Something bad happened; please try again later.');
        done();
      }
    });
  });
});
