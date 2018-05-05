import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class SocialService {

  private url = 'https://maleonserver.herokuapp.com/';//http://localhost:3000/
  constructor(private http: Http) { }

  initTwitter(){
  //  console.log("initTwitter")
    var headers = new Headers();
        headers.append('Content-Type', 'application/json');

    return this.http.get(this.url+'twitter/gettweets', {headers: headers})
        .map((response: Response) => {
        console.log(response.json());
          return response.json();
        })
        .catch((error: Response) =>  Observable.throw(error.json()) )

  }

  private handleError(error:any){
     // Observable.throw() is undefined at runtime using Webpack
  }
}
