import { TestBed, inject } from '@angular/core/testing';

import { DivPositionsService } from './div-positions.service';

describe('heightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DivPositionsService]
    });
  });

  it('should ...', inject([DivPositionsService], (service: HandleheightsService) => {
    expect(service).toBeTruthy();
  }));
});
