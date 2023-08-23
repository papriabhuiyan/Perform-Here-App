import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ArtistsService } from './artists.service';
import { CognitoService } from './cognito.service';
import { Votes } from './votes';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  baseUrl: string = "http://960169performhereapi-env.eba-yairqaej.us-west-2.elasticbeanstalk.com/votes/";
  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http:HttpClient, private cognitoService:CognitoService, private artistService: ArtistsService) { }

  getVotesByUser(userId: string | null): Observable<Votes[]> {
    return this.http.get<Votes[]>(this.baseUrl+"user/"+userId)
    .pipe(
      catchError(this.handleError)
    );
  }

  getVotesForArtist(stageName: string): Observable<Votes[]> {   
    return this.http.get<Votes[]>(this.baseUrl+"artist/"+stageName)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAllVotes(): Observable<Votes[]> {
    return this.http.get<Votes[]>(this.baseUrl+"all")
    .pipe(
      catchError(this.handleError)
    );
  }

  addVote(v: Votes) {
    const body = {
      "userId": v.userId,
      "artistName": v.artistName,
      "state": v.state,
      "city": v.city,
      "discountCode": "Not Applicable"
    }
    return this.http.post(this.baseUrl+"add", body, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateVotes(artistName:string|null, state:string|null, city:string|null, discountCode:string|null) {
    console.log(this.baseUrl+"artist/update/"+state+"/"+city+"/"+discountCode);
    return this.http.put(this.baseUrl+"artist/"+artistName+"/"+state+"/"+city+"/"+discountCode, {}, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
