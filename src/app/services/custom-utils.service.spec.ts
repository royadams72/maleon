import { TestBed, inject } from '@angular/core/testing';

import { CustomUtilsService } from './custom-utils.service';

describe('CustomUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomUtilsService]
    });
  });

  it('should be created', inject([CustomUtilsService], (service: CustomUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
