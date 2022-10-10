import { TestBed } from '@angular/core/testing';

import { FrisbeeService } from './frisbee.service';

describe('FrisbeeService', () => {
  let service: FrisbeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrisbeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
