import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { NgxPageScrollModule, PageScrollService, PageScrollConfig } from 'ngx-page-scroll';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopComponent } from './components/home/top/top.component';
import { NavComponent } from './components/nav/nav.component';

import { SocialComponent } from './components/home/social/social.component';
import { SocialService } from './services/social.service';
import { ServicesComponent } from './components/home/companyservices/services.component';
import { DivPositionsService } from './services/div-positions.service';
import { WindowRef } from './services/windowRef';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TaxComponent } from './components/tax/tax.component';
import { ConsultComponent } from './components/consult/consult.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactService } from './services/contact.service';
import { LegalsComponent } from './components/legals/legals.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ScrolltoTopComponent } from './common/shared/scrollto-top/scrollto-top.component';
import { ScrollService } from './services/scroll.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    TopComponent,
    NavComponent,
    SocialComponent,
    ServicesComponent,
    AccountsComponent,
    TaxComponent,
    ConsultComponent,
    HomeComponent,
    AboutComponent,
    LegalsComponent,
    PrivacyPolicyComponent,
    ScrolltoTopComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    NgxPageScrollModule,
    HttpClientModule
  ],
  providers: [
    SocialService,
    DivPositionsService,
    WindowRef,
    ContactService,
    PageScrollService,
    ScrollService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
