import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserTransferStateModule, BrowserModule, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { Observable } from 'rxjs';

import { WindowRef } from '../../services/windowRef';
import { DivPositionsService } from '../../services/div-positions.service';
import { ContactService } from '../../services/contact.service';
import { SocialService } from '../../services/social.service';
import { HomeComponent } from './home.component';
import { SocialComponent } from './social/social.component';
import { ServicesComponent } from './companyservices/services.component';
import { TopComponent } from './top/top.component';
import { ContactComponent } from './contact/contact.component';
// import { APP_BASE_HREF } from '../../../../node_modules/@angular/common';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let title:Title;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SocialComponent,
        ServicesComponent,
        TopComponent,
        ContactComponent
      ],
      imports:[RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserTransferStateModule,
        BrowserModule
      ],
      providers:[WindowRef,  {
        provide: ActivatedRoute,
        useValue: {snapshot: {data: {'title': 'Testing Title'}}},
       
      },
      Title,
      DivPositionsService,
      ContactService,
      SocialService
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    title = TestBed.get(Title)
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('should get page title from activated route onInit and set to meta tag', () => {
      component.ngOnInit();
      title.setTitle(component.pageTitle);
    //  console.log(component.pageTitle)
    expect(title.getTitle()).toBe(component.pageTitle);
  });
});
