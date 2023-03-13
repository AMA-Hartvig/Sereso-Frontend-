import { TestBed } from '@angular/core/testing';

import { ManholeService } from './manhole.service';

describe('ManholeService', () => {
  let service: ManholeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManholeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
