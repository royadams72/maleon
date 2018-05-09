import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SocialComponent } from './components/social/social.component';
import { SocialService } from './services/social.service';
import { ServicesComponent } from './components/companyservices/services.component';
import { DivPositionsService } from './services/div-positions.service';
import { WindowRef } from './services/windowRef';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TaxComponent } from './components/tax/tax.component';
import { ConsultComponent } from './components/consult/consult.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactService } from './services/contact.service';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [SocialService, DivPositionsService, WindowRef, ContactService],
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
