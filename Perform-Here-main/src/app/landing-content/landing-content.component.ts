import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {


  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit(): void {
  }
  goToMission(){
    this.scroller.scrollToAnchor("mission");
  }
  onLogin(){
    this.router.navigate(['/signin']);
  }
  signUp(){
    this.router.navigate(['/signup']);
  }
}
