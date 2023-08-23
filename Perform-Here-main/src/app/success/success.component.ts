import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationsService } from '../locations.service';
import { Votes } from '../votes';
import { VotesService } from '../votes.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  message: string = "";
  fanMessage: string ="";
  public counter: number = 0;

  constructor(private voteService: VotesService, private locationService:LocationsService, private router: Router) { }

  ngOnInit(): void {
    this.message = "You voted for " + localStorage.getItem("pickedArtist") + " at the location " + localStorage.getItem("pickedCity") + " " + localStorage.getItem("pickedState");
    let pickedState: string | null = localStorage.getItem("pickedState");
    if(pickedState != null) {
      this.message = "You voted for " + localStorage.getItem("pickedArtist") + " at the location " + localStorage.getItem("pickedCity") + " " +  this.locationService.states()[parseInt(pickedState)-1].name;
      let v:Votes = new Votes(localStorage.getItem("userId"), localStorage.getItem("pickedArtist"), this.locationService.states()[parseInt(pickedState)-1].name, localStorage.getItem("pickedCity"), "Not Applicable");
      this.voteService.addVote(v).subscribe(res => console.log(res));
    }
    else {
      console.log("Invalid State");
    }
  }
  onProfile(){
    this.router.navigate(['/profile']);
  }
}
