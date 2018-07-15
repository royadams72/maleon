import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ContactService } from './contact.service';
import { Email } from '../models/email.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

describe('ContactService', () => {
  let apiURL:string;
  let httpMock: HttpTestingController;
  let service, successMsg, contact:Email;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService],
      imports:[
        HttpClientModule,
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    apiURL = 'https://maleonserver.herokuapp.com/';
    service = TestBed.get(ContactService);
    httpMock = TestBed.get(HttpTestingController);
    successMsg = {sucess: true, msg: 'sent'}
    contact = {
      name:'Test name',
      email: 'Test value',
      message: 'Test message',
      phone: 'Test phone'
      }
  });

  it('should initiate', () => {
    expect(service).toBeTruthy();
  });
  it('should return success message when correct info submitted', () => {
    // sendMail
    // service.sendMail.and.returnValue(Observable.of(successMsg));
    service.sendMail(contact)
    .subscribe(results => {
      expect(results).toBeDefined();
      //has to be what is returned by the function
      console.log(results)
      expect(results).toEqual(successMsg);
      

    });
  });

});
