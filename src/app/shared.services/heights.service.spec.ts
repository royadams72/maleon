import { TestBed, inject } from '@angular/core/testing';

import { HandleheightsService } from './handleheights.service';

describe('heightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandleheightsService]
    });
  });

  it('should ...', inject([HandleheightsService], (service: HandleheightsService) => {
    expect(service).toBeTruthy();
  }));
});
