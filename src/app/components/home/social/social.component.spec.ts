import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { DivPositionsService } from '../../../services/div-positions.service';
import { SocialService } from '../../../services/social.service';
import { SocialComponent } from './social.component';

describe('SocialComponent', () => {
  let component: SocialComponent;
  let fixture: ComponentFixture<SocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialComponent ],
      providers:[SocialService, DivPositionsService],
      imports:[HttpClientModule, BrowserTransferStateModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
