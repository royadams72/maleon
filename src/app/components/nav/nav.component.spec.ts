/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPageScrollModule, PageScrollService, PageScrollConfig } from 'ngx-page-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DivPositionsService } from '../../services/div-positions.service';
import { NavBg, NavUl } from './nav.animations';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { routing } from '../../app.routing';
import { NavComponent } from './nav.component';
import { AboutComponent } from '../about/about.component';
import { RouterTestingModule } from '../../../../node_modules/@angular/router/testing';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  class SimpleCmp{}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgxPageScrollModule,
        RouterTestingModule.withRoutes([
        { path: '', component: SimpleCmp }]),
        BrowserAnimationsModule],
      providers: [DivPositionsService, PageScrollService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
