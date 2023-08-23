import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {User} from './user';
import { of, throwError } from 'rxjs';
 
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let baseUrl: string = "http://960169performhereapi-env.eba-yairqaej.us-west-2.elasticbeanstalk.com/";
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let fakeUser = new User("fake@email", "Joe", "Nobody")

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpy.post.and.returnValue(of(fakeUser));

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy}
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should post a user to the correct url', () => {
    httpClientSpy.post.and.returnValue(of(fakeUser));
    const body = {
      "id": fakeUser.id,
      "firstName": fakeUser.firstName,
      "lastName": fakeUser.lastName,
    }
    service.addUser(fakeUser).subscribe(
      res => {
        expect(res).toEqual(fakeUser);
      }
    );

    expect(httpClientSpy.post).toHaveBeenCalledWith(baseUrl+"add", body, jasmine.any(Object));
  });
  
  it('should handle errors', (done: DoneFn) => {
    const errorResponse0 = new HttpErrorResponse({
      error: "test 0 status error",
      status: 0,
      statusText: "0 Error"
    });
    httpClientSpy.post.and.returnValue(throwError(()=>errorResponse0));

    service.addUser(fakeUser).subscribe({
      next: user => done.fail("expected an error"),
      error: error => {
        expect(error.message).toEqual('Something bad happened; please try again later.');
        done();
      }
    });
  });

  it('serUserId should set the service userId', ()=> {
    service.setUserId(fakeUser.id);
    expect(service.userId).toEqual(fakeUser.id);
  });

  it('getUserId should return service userId', () => {
    service.setUserId(fakeUser.id);
    let returnedId = service.getUserId();
    expect(returnedId).toEqual(fakeUser.id);
  });
});
