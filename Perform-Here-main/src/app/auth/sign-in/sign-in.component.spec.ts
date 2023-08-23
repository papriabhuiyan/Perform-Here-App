import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, CognitoService } from 'src/app/cognito.service';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let cognitoServiceSpy: jasmine.SpyObj<CognitoService>
  let routerSpy: jasmine.SpyObj<Router>
  let user = {} as IUser
  user.email = "fakeemail@notreal.com";
  user.password = "Test123!";

  beforeEach(async () => {
    cognitoServiceSpy = jasmine.createSpyObj('CognitoService',['signIn']);
    routerSpy = jasmine.createSpyObj('Router',['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: CognitoService, useValue: cognitoServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke sign in with valid data when the user clicks submit', () => {
    let emailTextBox = fixture.nativeElement.querySelector('[data-test-id="Email"]');
    let passwordTextBox = fixture.nativeElement.querySelector('[data-test-id="password"]');
    let signInForm = fixture.nativeElement.querySelector('[data-test-id="signinForm"]');

    emailTextBox.value = user.email;
    emailTextBox.dispatchEvent(new Event('input'));

    passwordTextBox.value = user.password;
    passwordTextBox.dispatchEvent(new Event('input'));

    signInForm.dispatchEvent(new Event('submit'));
    expect(cognitoServiceSpy.signIn).toHaveBeenCalledWith(user);

    setTimeout(()=>{
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/browse']);
    }, 1000);
  });

});
