import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {User} from './user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  postHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  userId: string = "";
  baseUrl: string = "http://960169performhereapi-env.eba-yairqaej.us-west-2.elasticbeanstalk.com/";

  constructor(private http:HttpClient) { }

  addUser(user: User) {
    const body = {
      "id": user.id,
      "firstName": user.firstName,
      "lastName": user.lastName,
    }
    return this.http.post(this.baseUrl+"add", body, this.postHeaders)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  setUserId(id: string) {
    this.userId = id;
  }

  getUserId(){
    return this.userId;
  }
}
