import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private cognitoService: CognitoService) { }

  ngOnInit(): void {
  }
  
  onLogout(): void {
    this.cognitoService.signOut()
    .then(() => {
      this.router.navigate(['/home']);
    });
  }

  profile() {
    this.router.navigate(['profile']);
  }

  browsing() {
    this.router.navigate(['browse']);
  }
}
