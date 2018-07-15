import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageScrollService } from 'ngx-page-scroll';

import { TaxComponent } from './tax.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TaxComponent', () => {
  let component: TaxComponent;
  let fixture: ComponentFixture<TaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxComponent ],
      imports:[RouterTestingModule],
      providers:[PageScrollService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
