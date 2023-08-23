import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistsService } from '../artists.service';
import { CognitoService } from '../cognito.service';
import { UserService } from '../user.service';
import { Votes } from '../votes';
import { VotesService } from '../votes.service';

var name:string;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  artists : Artist[]= [];
  newArtists: Artist[] = [];
  userId: string | null = "";
  isArtist: boolean = false;
  a: Artist = new Artist("", "", "");
  votes: Votes[] = [];

  user: Votes[]=[];

  //initializing artist and newArtist arrays
  constructor(private votesService:VotesService, private artistService: ArtistsService, private userService: UserService, private cognitoService: CognitoService, private voteservice: VotesService) {
    this.artistService.getAllArtists().subscribe(artists=>{
      this.artists=artists;
      this.newArtists = artists;
    });

  }

  //grabs users email
  ngOnInit(): void {
    this.userId = this.cognitoService.getEmail();
    
    this.artistService.getArtistById(this.userId).subscribe(artist => {
      if(artist != null) {
        this.isArtist = true;
        this.a=artist;
      }

      if(this.isArtist) {
        let stageName:string = "";
        this.artistService.getArtistById(this.userId).subscribe(artist => {
        this.votesService.getVotesForArtist(artist.stageName).subscribe(votes => {this.votes = votes;});
        });
      }

        this.votesService.getVotesByUser(this.cognitoService.getEmail()).subscribe(votes => this.user = votes);
      
    });    
  }

  updateArtist() {
    this.artistService.addArtist(this.a).subscribe(res => console.log(res));
  }
}
