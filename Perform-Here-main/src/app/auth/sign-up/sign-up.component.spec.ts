import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, CognitoService } from 'src/app/cognito.service';
import { UserService } from 'src/app/user.service';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let cognitoServiceSpy: jasmine.SpyObj<CognitoService>
  let userServiceSpy: jasmine.SpyObj<UserService>
  let routerSpy: jasmine.SpyObj<Router>;
  let user = {} as IUser

  beforeEach(async () => {
    cognitoServiceSpy = jasmine.createSpyObj('CognitoService',['signUp', 'confirmSignUp']);
    routerSpy = jasmine.createSpyObj('Router',['navigate']);
    userServiceSpy = jasmine.createSpyObj('UserService', ['addUser']);

    user.email = "fakeemail@notreal.com";
    user.password = "Test123!";
    user.firstName = "Joe";
    user.lastName = "Nobody"
    

    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        { provide: CognitoService, useValue: cognitoServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should invoke SignUp, with valid form data when user clicks submit', () => {
    cognitoServiceSpy.signUp.and.returnValue(Promise.resolve(true));
    let firstNameTextBox = fixture.nativeElement.querySelector('[data-test-id="firstName"]');
    let lastNameTextBox = fixture.nativeElement.querySelector('[data-test-id="lastName"]');
    let emailTextBox = fixture.nativeElement.querySelector('[data-test-id="Email"]');
    let passwordTextBox = fixture.nativeElement.querySelector('[data-test-id="password"]');
    let confirmPasswordTextBox = fixture.nativeElement.querySelector('[data-test-id="confirmpassword"]');
    let signUpForm = fixture.nativeElement.querySelector('[data-test-id="signUpForm"]');

    firstNameTextBox.value = user.firstName;
    firstNameTextBox.dispatchEvent(new Event('input'));

    lastNameTextBox.value = user.lastName;
    lastNameTextBox.dispatchEvent(new Event('input'));

    emailTextBox.value = user.email;
    emailTextBox.dispatchEvent(new Event('input'));

    passwordTextBox.value = "Test123!";
    passwordTextBox.dispatchEvent(new Event('input'));

    confirmPasswordTextBox.value = "Test123!";
    confirmPasswordTextBox.dispatchEvent(new Event('input'));

    signUpForm.dispatchEvent(new Event('submit'));
    fixture.whenStable().then(
      () => {
        expect(cognitoServiceSpy.signUp).toHaveBeenCalledWith(user);
        expect(component.loading).toBeFalse;
        expect(component.isConfirm).toBeTrue;
      }
    );
  });

  it('Should alert if passwords do not match', async () => {
    let signUpForm = fixture.nativeElement.querySelector('[data-test-id="signUpForm"]');
    spyOn(window, "alert");
    let passwordTextBox = fixture.nativeElement.querySelector('[data-test-id="password"]');
    let confirmPasswordTextBox = fixture.nativeElement.querySelector('[data-test-id="confirmpassword"]');

    passwordTextBox.value = 'Test123!';
    passwordTextBox.dispatchEvent(new Event('input'));

    confirmPasswordTextBox.value = "Test123";
    confirmPasswordTextBox.dispatchEvent(new Event('input'));

    signUpForm.dispatchEvent(new Event('submit'));

    fixture.whenStable().then(
      () => {
        expect(window.alert).toHaveBeenCalledOnceWith("Passwords must match!");
      }
    );
  });

  it('Should alert if there is invalid information', async () => {
    let signUpForm = fixture.nativeElement.querySelector('[data-test-id="signUpForm"]');
    spyOn(window, "alert");
    let passwordTextBox = fixture.nativeElement.querySelector('[data-test-id="password"]');
    let confirmPasswordTextBox = fixture.nativeElement.querySelector('[data-test-id="confirmpassword"]');

    passwordTextBox.value = user.password;
    passwordTextBox.dispatchEvent(new Event('input'));

    confirmPasswordTextBox.value = "Test123!";
    confirmPasswordTextBox.dispatchEvent(new Event('input'));

    signUpForm.dispatchEvent(new Event('submit'));

    fixture.whenStable().then(
      () => {
        expect(window.alert).toHaveBeenCalledOnceWith("Invalid Signup information");
      }
    );
  });

  it(`Auth.conirmSignUp should be called by confirmSignUp
      with user passed, then navigate to signIn if not an artist`, () => {
    component.isArtist = false;
    cognitoServiceSpy.confirmSignUp.and.returnValue(Promise.resolve(true));
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    component.confirmSignUp();
    fixture.whenStable().then(() => {
      expect(cognitoServiceSpy.confirmSignUp).toHaveBeenCalledWith(user);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/signin']);
    });
  });

  it(`Auth.conirmSignUp should be called by confirmSignUp
      with user passed, then navigate to performer form if not an artist`, () => {
    component.isArtist = true;
    cognitoServiceSpy.confirmSignUp.and.returnValue(Promise.resolve(true));
    routerSpy.navigate.and.returnValue(Promise.resolve(true));
    component.confirmSignUp();
    fixture.whenStable().then(() => {
      expect(cognitoServiceSpy.confirmSignUp).toHaveBeenCalledWith(user);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/performer_form']);
    });
  });

  it(`confirmSignUp should call Auth.confirmSignUp, 
  passing user, then set loading to false on failure`, () => {
    cognitoServiceSpy.confirmSignUp.and.returnValue(Promise.reject(true));
    component.confirmSignUp();
    fixture.whenStable().then(() => {
      expect(cognitoServiceSpy.confirmSignUp).toHaveBeenCalledWith(user);
    });
  });
});