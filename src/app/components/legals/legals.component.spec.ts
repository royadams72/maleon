import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PageScrollService } from 'ngx-page-scroll';
import { LegalsComponent } from './legals.component';


describe('LegalsComponent', () => {
  let component: LegalsComponent;
  let fixture: ComponentFixture<LegalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalsComponent ],
      providers:[PageScrollService, {
        provide: ActivatedRoute,
        useValue: {snapshot: {data: {'title': 'Testing Title'}}},
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
