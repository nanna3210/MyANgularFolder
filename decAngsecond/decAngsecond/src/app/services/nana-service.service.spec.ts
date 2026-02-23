import { TestBed } from '@angular/core/testing';

import { NanaServiceService } from './nana-service.service';

describe('NanaServiceService', () => {
  let service: NanaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
