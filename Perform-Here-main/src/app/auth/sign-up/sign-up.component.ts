import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { IUser, CognitoService } from '../../cognito.service';
import { User } from '../../user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  loading: boolean;
  isConfirm: boolean;
  user: IUser
  isArtist: boolean = false;
  userId: string = "";

  signupForm: FormGroup = this.formBuilder.group({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required, Validators.email]),
    //Password must be minimum 8 characters, have 1 Capital 1 Lowercase, 1 number, and 1 special character
    Password: new FormControl('',[Validators.required, Validators.pattern(
      "^(?=.*\\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[a-zA-Z0-9@$!%*?&{|}~_=+.-])(?!.*\\s).{8,24}$"
    )]),
    confirmpassword: new FormControl('',[Validators.required])
  });


  constructor(private router: Router, private formBuilder: FormBuilder, private cognitoService: CognitoService, private userService: UserService) { 
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    
  }

  setArtist(event: Event) {
    this.isArtist = (event.target as HTMLInputElement).checked;
  }

  get firstname() {
    return this.signupForm.get('firstname');
  }

  get lastname() {
    return this.signupForm.get('lastname');
  }

  get Password() {
    return this.signupForm.get('Password');
  }

  get confirmpassword() {
    return this.signupForm.get('confirmpassword');
  }
  
  get Email() {
    return this.signupForm.get('Email');
  }

  onSignup() {
    if(this.signupForm.valid && (this.confirmpassword?.value == this.Password?.value)) {

      this.user.email = this.Email?.value;
      this.user.password = this.Password?.value;
      this.user.firstName = this.firstname?.value;
      this.user.lastName = this.lastname?.value;

      this.loading = true;
      this.cognitoService.signUp(this.user)
      .then(() => {

        this.loading = false;
        this.isConfirm = true;
        
        let u: User = new User(this.user.email, this.user.firstName, this.user.lastName);
        this.userService.addUser(u).subscribe(user => console.log(user));
        
      }).catch((error) => {
        alert(error);
        this.loading = false;
      });
    }
    else {
      if(this.confirmpassword?.value !== this.Password?.value) {
        alert("Passwords must match!");
      }
      else
        alert("Invalid Signup information");
    }
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
      if(this.isArtist) {
        this.router.navigate(['/performer_form']);
      }
      else {
        this.router.navigate(['/signin']);
      }
    }).catch(() => {
      this.loading = false;
    });
  }
  
}