import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NgxPageScrollModule, PageScrollService, PageScrollConfig} from 'ngx-page-scroll';
import { ConsultComponent } from './consult.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConsultComponent', () => {
  let component: ConsultComponent;
  let fixture: ComponentFixture<ConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultComponent ],
      imports:[NgxPageScrollModule, RouterTestingModule],
      providers:[PageScrollService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
