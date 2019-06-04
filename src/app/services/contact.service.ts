import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';
@Injectable()
export class ContactService {
  private url = 'https://maleonserver.herokuapp.com/';//http://localhost:3000/
  constructor(private http: HttpClient) { }

  public sendMail(email): Observable<any> {
    const httpOptions = {
     headers: new HttpHeaders({
      'Content-Type': 'application/X-www-form-urlencoded',
    })
  };
  
  let body = "name="+email.name+"&email="+email.email+"&phone="+email.phone+"&message="+email.message

        return this.http.post(this.url+'contact/sendmail', body, httpOptions)
            .map((response) => {
              return response;
            })
            .catch((error: Response) =>  Observable.throw(error.json()) )
  }

}
