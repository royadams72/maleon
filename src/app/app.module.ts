import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopComponent } from './components/top/top.component';
import { NavComponent } from './components/nav/nav.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SocialComponent } from './components/social/social.component';
import { SocialService } from './components/social/social.service';
import { ServicesComponent } from './components/companyservices/services.component';
import { HeightsService } from './shared.services/heights.service';
import { WindowRef } from './shared.services/windowRef';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TaxComponent } from './components/tax/tax.component';
import { ConsultComponent } from './components/consult/consult.component';
import { HomeComponent } from './components/home/home.component';
import { ScrollService } from './shared.services/scroll.service';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2PageScrollModule.forRoot(),
    routing
  ],
  providers: [SocialService, HeightsService, WindowRef, ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
