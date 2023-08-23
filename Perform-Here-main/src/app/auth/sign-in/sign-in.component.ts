import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, CognitoService } from 'src/app/cognito.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  
  email_address: string = '';
  password: string = '';
  loading: boolean;
  user: IUser; //variable to get email of the artist logging in
  invalid: boolean = false; 

  constructor(private router: Router, private userService: UserService, private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {}

  onSignIn(form: NgForm) {
    this.user.email = this.email_address;
    this.user.password = this.password;

    if (form.valid) {
      this.loading = true;
      this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['/browse']);
      }).catch(() => {
        this.invalid = true;
        this.loading = false;
      });
    }
    else {
      this.invalid = true;
    }
  }
}