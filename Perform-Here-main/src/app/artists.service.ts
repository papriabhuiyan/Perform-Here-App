import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Artist } from './artist';
import { ArtistForm } from './artistForm';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  //connecting to springboot
  baseUrl: string = "http://960169performhereapi-env.eba-yairqaej.us-west-2.elasticbeanstalk.com/perfArtists/";

  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http:HttpClient) { }

  addArtist(artist: Artist) {
    const body = {
      "id": artist.id,
      "stageName": artist.stageName,
      "description": artist.description,
    }
    //adding attributes to spring boot artist table
    return this.http.post(this.baseUrl+"add", body, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  getAllArtists():Observable<Artist[]> {
    return this.http.get<Artist[]>(this.baseUrl+"all")
    .pipe(
      catchError(this.handleError)
    );
  }
  
  getArtistById(id:string | null) {
    return this.http.get<Artist>(this.baseUrl+id, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  addArtistForm(artistForm: ArtistForm) {
    const body = {
      "artistid": artistForm.artistID,
      "firstname": artistForm.firstname,
      "lastname": artistForm.lastname,
      "stagename": artistForm.stagename,
      "accountemail": artistForm.accountemail,
      "managementemail": artistForm.managementemail,
      "phoneno": artistForm.phoneno
    }
    return this.http.post("https://o6xu4u1o3b.execute-api.us-west-2.amazonaws.com/default/960148_formPost", body, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }
}
