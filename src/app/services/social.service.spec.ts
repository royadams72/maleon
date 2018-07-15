import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { SocialService } from './social.service';

describe('SocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialService],
      imports:[HttpClientModule, BrowserTransferStateModule]
    });
  });

  it('should ...', inject([SocialService], (service: SocialService) => {
    expect(service).toBeTruthy();
  }));
});
