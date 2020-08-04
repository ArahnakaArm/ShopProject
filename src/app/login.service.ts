import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  logIn (loginModel){
    return this.http.post('http://localhost:9000/login', loginModel)
    .pipe(map(res => res.json()));
  }
}