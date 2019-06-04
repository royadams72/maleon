/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { DivPositionsService } from '../../../services/div-positions.service';
import { ContactService } from '../../../services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Email } from '../../../models/email.model';
import { HttpClientTestingModule, HttpTestingController } from '../../../../../node_modules/@angular/common/http/testing';
import { Observable } from '../../../../../node_modules/rxjs';
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let contactService;
  let httpMock: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports:[
        FormsModule, 
        ReactiveFormsModule, 
        HttpClientModule, HttpClientTestingModule],
      providers:[
        {
          provide: ContactService,
          useValue: jasmine.createSpyObj('contactService', ['sendMail'])
        },
        {
        provide: DivPositionsService,
        useValue: jasmine.createSpyObj('divPositionsService', ['updateObj'])
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    contactService = TestBed.get(ContactService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form ngOnInit', () => {
    component.ngOnInit()
    expect(component.contactForm).toBeDefined();
  });
  it('should submit values from form', () => {
    const successMsg = {sucess: true, msg: 'sent'}
    const contact:Email = {
    name:'Test name',
    email: 'Test email',
    message: 'Test message',
    phone: 'Test phone'
    }
    contactService.sendMail.and.returnValue(Observable.of(successMsg));
    expect(contactService).toBeDefined()
    contactService.sendMail(contact)
    .subscribe(results => {
      // expect(results).toBeDefined();
      // has to be what is returned by the function
      // console.log(results)
      expect(results).toEqual(successMsg);

    });
    // console.log(contactService)
  });

});
