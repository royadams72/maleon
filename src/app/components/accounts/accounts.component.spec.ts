import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPageScrollModule, PageScrollService, PageScrollConfig } from 'ngx-page-scroll';
import { AccountsComponent } from './accounts.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsComponent],
      imports: [NgxPageScrollModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
