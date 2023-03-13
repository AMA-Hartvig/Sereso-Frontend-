import { TestBed } from '@angular/core/testing';

import { LateralService } from './lateral.service';

describe('LateralService', () => {
  let service: LateralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LateralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
