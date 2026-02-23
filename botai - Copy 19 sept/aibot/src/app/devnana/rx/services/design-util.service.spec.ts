import { TestBed } from '@angular/core/testing';

import { DesignUtilService } from './design-util.service';

describe('DesignUtilService', () => {
  let service: DesignUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
