import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class ContactService {
  private url = 'https://maleonserver.herokuapp.com/';//http://localhost:3000/
  constructor(private http: Http) { }

  public sendMail(email){
    // console.log(email)
    let headers = new Headers({'Content-Type': 'application/X-www-form-urlencoded'});
    // console.log(email.email)
    let body = "name="+email.name+"&email="+email.email+"&phone="+email.phone+"&message="+email.message
    let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url+'contact/sendmail', body, options)
            .map((response: Response) => {
            console.log(response.json());
              return response.json();
            })
            .catch((error: Response) =>  Observable.throw(error.json()) )
  }

}
