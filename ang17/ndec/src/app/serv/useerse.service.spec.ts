import { TestBed } from '@angular/core/testing';

import { UseerseService } from './useerse.service';

describe('UseerseService', () => {
  let service: UseerseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseerseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
