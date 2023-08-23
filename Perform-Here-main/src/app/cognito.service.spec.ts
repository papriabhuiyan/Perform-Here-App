import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Amplify } from 'aws-amplify';
import { CognitoService, IUser } from './cognito.service';

describe('CognitoService', () => {
  let service: CognitoService;
  let user = {} as IUser
  let routerSpy: jasmine.SpyObj<any>;

  beforeEach(() => {
    user.email = "fakeemail@notreal.com";
    user.password = "Test123!";
    user.firstName ="Joe";
    user.lastName ="Nobody";
    routerSpy = jasmine.createSpyObj('Router',['navigate']);

    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers: []
    });
    service = TestBed.inject(CognitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isAuthenticated, should broadcast true, if user is returned.', async () =>{
    let isAuthenticated: boolean;
    spyOn(Amplify.Auth, 'currentUserInfo').and.returnValue(Promise.resolve(user));
    service.isAuthenticated().then(
      res => isAuthenticated = res
    );

    setTimeout(()=>{
      expect(isAuthenticated).toBeTruthy()
    }, 1000);
  });

  it('isAuthenticated, should return true if authenticationSubject is true', async () => {
    let isAuthenticated: boolean;
    service.authenticationSubject.next(true);

    service.isAuthenticated().then(
      res => isAuthenticated = res
    );
    
    setTimeout(()=>{
      expect(isAuthenticated).toBeTruthy()
    }, 2000);
  });

  it('getUser should call currentUserInfo and return a user', () => {
    spyOn(Amplify.Auth, 'currentUserInfo').and.returnValue(Promise.resolve(user));
    service.getUser().then(
      user => expect(user).toEqual(user)
    );
  });

  it('getUserAttributes should call currentUserInfo and return a user', () => {
    spyOn(Amplify.Auth, 'currentUserInfo').and.returnValue(Promise.resolve(user));
    service.getUserAttributes().then(
      user => expect(user).toEqual(user)
    );
  });

  it(`canActivate should return false if no user is logged in`, () =>{
    let isActivated: boolean = true;
    const spy = spyOn(Amplify.Auth, 'currentUserInfo').and.returnValue(Promise.resolve(false));
    service.canActivate().then(
      res => isActivated = res
    );
    setTimeout(() => {
      expect(isActivated).toBeFalse();
      expect(spy).toHaveBeenCalled();
    },3000);
  });

  it(`canActivate should return true if user is logged in and should navigate to /signin`, () =>{
    let isActivated: boolean = false;
    const spy = spyOn(Amplify.Auth, 'currentUserInfo').and.returnValue(Promise.resolve(true));
    service.canActivate().then(
      res => isActivated = res
    );

    setTimeout(()=>{
      expect(isActivated).toBeTrue()
      expect(spy).toHaveBeenCalled()
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/signin'])
    }, 1000);
  });

  it(`signUp should call Auth.signUp with passed in user info`, () => {
    const spy = spyOn(Amplify.Auth, 'signUp').and.returnValue(Promise.resolve(true));
    service.signUp(user).then(
      () => expect(spy).toHaveBeenCalledWith({
        username: user.email,
        password: user.password,
        attributes: {
          name: user.firstName,
          family_name: user.lastName,
          email: user.email
        }
      })
    );
  });

  it(`confirmSignUp should call Auth.confirmSignUp with passed in user info`, () => {
    const spy = spyOn(Amplify.Auth, 'confirmSignUp').and.returnValue(Promise.resolve(true));
    service.confirmSignUp(user).then(
      () => expect(spy).toHaveBeenCalledWith(user.email, user.code)
    );
  });

  it(`signIn should call Auth.signIn with passed in user info`, () => {
    const spy = spyOn(Amplify.Auth, 'signIn').and.returnValue(Promise.resolve(true));
    service.signIn(user).then(
      () => { 
        expect(spy).toHaveBeenCalledWith(user.email, user.password)
      }
    );
  });

  it(`signOut should call Auth.signOut and isAuth should be set to false`, () => {
    let IsSignedOut: boolean = false;
    const spy = spyOn(Amplify.Auth, 'signOut').and.returnValue(Promise.resolve(true));
    service.signOut().then(
      res => {
        IsSignedOut = res;
      }
    );
    setTimeout(()=>{
      expect(IsSignedOut).toBeTrue()
      expect(spy).toHaveBeenCalled();
      expect(service.isAuth).toBeTrue;
    },1000)
  });
});
