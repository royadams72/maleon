import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { SocialService } from './social.service';
import { Observable } from '../../../node_modules/rxjs';

describe('SocialService', () => {
  let httpMock: HttpTestingController;
  let service:SocialService;
  let apiURL:string
  let returnedResults:any
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialService],
      imports:[BrowserTransferStateModule, HttpClientTestingModule]
    });
    service = TestBed.get(SocialService);
    httpMock = TestBed.get(HttpTestingController);
    apiURL = 'https://maleonserver.herokuapp.com/';
    returnedResults = [{created_at: "Jul 16 2018", id: 1, id_str: "1", text: "Twitter text1"}, {created_at: "Jul 17 2018", id: 2, id_str: "2", text: "Twitter text2"}]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should get Tweets', () => {
    service.initTwitter()
    .subscribe((response)=>{
      expect(response).toBeDefined();
      expect(response).toEqual(returnedResults);
      console.log(response)
    })
    const request = httpMock.expectOne(apiURL+'twitter/gettweets');
    expect(request.request.method).toEqual('GET');
    request.flush(returnedResults);
    httpMock.verify();
  });

  it('should return error if cannot get Tweets', () => {
    service.initTwitter()
    .subscribe(()=>{
    }, error =>{
      expect(error.error.type).toBe('ERROR_GETTING_TWEETS'); 
      console.log(error.error.type) 
      Observable.throw(error)
    }
  ) 
    const request = httpMock.expectOne(apiURL+'twitter/gettweets');
    request.error(new ErrorEvent('ERROR_GETTING_TWEETS'));
    httpMock.verify();
  });
});
