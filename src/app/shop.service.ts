import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders} from  "@angular/common/http";
@Injectable()
export class ShopService {
  
  constructor(private http: Http) { }

  findAll() {
    return this.http.get('http://localhost:9000/shops')
      .pipe(map(res => res.json()));
  }

  findOne(id) {
    
    return this.http.get(`http://localhost:9000/shops/${id}`)
      .pipe(map(res => res.json()));
  }
  deleteOne(id){
    return this.http.delete(`http://localhost:9000/shops/${id}`)
       .pipe(map(res => res.json()));
  }
 /* postOne(){
      return this.http.post('http://localhost:9000/users')
          .pipe(map(res => res.json()));

  }*/
  addShop (user){
    return this.http.post('http://localhost:9000/shops', user)
    .pipe(map(res => res.json()));
  }

 
}