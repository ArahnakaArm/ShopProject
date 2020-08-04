import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders} from  "@angular/common/http";
@Injectable()
export class UserService {
  
  constructor(private http: Http) { }

  findAll() {
    return this.http.get('http://localhost:9000/users')
      .pipe(map(res => res.json()));
  }

  findOne(id) {
    
    return this.http.get(`http://localhost:9000/users/${id}`)
      .pipe(map(res => res.json()));
  }
  deleteOne(id){
    return this.http.delete(`http://localhost:9000/users/${id}`)
       .pipe(map(res => res.json()));
  }
 /* postOne(){
      return this.http.post('http://localhost:9000/users')
          .pipe(map(res => res.json()));

  }*/
  addUser (user){
    return this.http.post('http://localhost:9000/users', user)
    .pipe(map(res => res.json()));
  }

  getProfile (token){
    const headerDict = {
      'Authorization': 'Bearer '+token
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };
    return this.http.get('http://localhost:9000/users',requestOptions)
  }
 
}