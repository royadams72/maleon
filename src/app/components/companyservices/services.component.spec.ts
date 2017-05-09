import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyservicesComponent } from './companyservices.component';

describe('CompanyservicesComponent', () => {
  let component: CompanyservicesComponent;
  let fixture: ComponentFixture<CompanyservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
