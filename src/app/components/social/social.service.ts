import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class SocialService {
  private searchQuery:string;
  private headers = new Headers();

  constructor(private http: Http) {
      this.headers.append('Content-Type', 'application/X-www-form-urlencoded');
  }

  initTwitter(){
    return this.http.post('http://localhost:3000/authorise', {headers: this.headers})
    .map((response: Response) => {
    //  console.log(response.json());
      return response.json();
    })
    .mergeMap((data) =>{
    //  console.log(data.success)
      var searchTerm = 'query=TAX'//+ this.searchQuery
      return this.http.post('http://localhost:3000/search', searchTerm ,{headers: this.headers})
    })
    .map((data)=>{
    return data.json().data.statuses;
  }).catch((error) => {
    //console.log(error.json().error)
   return Observable.throw(error.json().error || 'Server error');
  })
  }

  private handleError(error:any){
     // Observable.throw() is undefined at runtime using Webpack
  }
}
