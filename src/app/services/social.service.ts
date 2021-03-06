import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import { Observable } from "rxjs";
import 'rxjs/Rx';
//Instatiate TWITTER_KEY with something
const TWITTER_KEY = makeStateKey('twitter');
@Injectable()
export class SocialService {
  private twitter:any;
  private url = 'https://maleonserver.herokuapp.com/';//http://localhost:3000/
  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId,
              private transferState:TransferState) { }

  initTwitter(){
    this.twitter = this.transferState.get(TWITTER_KEY, null as any);
  //set this.twitter to TWITTER_KEY, but set default value to null e.g. this.twitter = null
    let data;
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
      if (this.twitter) {
        //If not null, set data to TWITTER_KEY
        data = this.transferState.get(TWITTER_KEY, null);
            this.transferState.remove(TWITTER_KEY);
            //remove and return
            return Observable.of(data);
            }else{
              //If null reach out to server
              const httpOptions = {
                headers: new HttpHeaders({
                 'Content-Type': 'application/json',
               })
             };
              return this.http.get(this.url+'twitter/gettweets', httpOptions)
                  .map((response) => {
                    let data = response;
                      // console.log(data);
                      //  if we are on the server, after fetching the data we want
                      // to store it so that it gets transfered back to the client.
                     if (isPlatformServer(this.platformId)) {
                        this.transferState.set(TWITTER_KEY, data as any);
                      }
                    return data;
                  })
                  .catch((error) =>  Observable.throw(error) )

            }
      }

  private handleError(error:any){
     // Observable.throw() is undefined at runtime using Webpack
  }
}
