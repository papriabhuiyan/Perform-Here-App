import { Component, Input, OnInit, ɵisListLikeIterable } from '@angular/core';
import { VotesService } from '../votes.service';
import { Votes } from '../votes';

export class CityVotes{
  constructor(
      public votes: number,
      public city: string | null,
      public state: string | null,
      public artistName: string | null
  ){}
}

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {

  @Input() votes: Votes[] = [];
  discountCode: string = "";
  votesPerCity: CityVotes[] = [];
  
  constructor(private votesService: VotesService) { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
    this.calculateVotes();
  }

  calculateVotes() {
    let flag:boolean = false;
    this.votes.forEach(vote => {
      flag = false;
      if(this.votesPerCity.length != 0) {  //Votes per city array not empty
        this.votesPerCity.forEach(cityVote => {
          if(cityVote.city === vote.city) {    //Found City in votes per city array
            cityVote.votes = cityVote.votes + 1;
            flag = true;
          }
        });
        if(!flag) {   //City Not Found in votes per city array, so it is added
          this.votesPerCity.push(new CityVotes(1, vote.city, vote.state, vote.artistName));
        }
      }
      else {  //Vote per city array was empty so add city
        this.votesPerCity.push(new CityVotes(1, vote.city, vote.state, vote.artistName));
      }
    });

    //Sort array by votes
    this.votesPerCity.sort((a, b) => (a.votes < b.votes) ? 1 : -1 );
  }

  confirmLocation(artistName:string|null, state: string | null, city: string| null, discountCode: HTMLInputElement) {
    this.votesService.updateVotes(artistName, state, city, discountCode.value).subscribe(res => console.log(res));
  }
}
