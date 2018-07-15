import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicesComponent } from './services.component';
import { DivPositionsService } from '../../../services/div-positions.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CompanyservicesComponent', () => {
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;
  let divPositionsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesComponent ],
      imports:[RouterTestingModule],
      providers:[DivPositionsService,  {
        provide: DivPositionsService,
        useValue: jasmine.createSpyObj('divPositionsService', ['updateObj'])
      }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesComponent);
    component = fixture.componentInstance;
    divPositionsService = TestBed.get(DivPositionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send offsetTop to service on ngAfterViewInit', () => {
    let offsetTop = "200"
    component.ngAfterViewInit()
    divPositionsService.updateObj('service', offsetTop)
    // expect(component).toBeTruthy();
  });
});
