import { TestBed } from '@angular/core/testing';

import { PunchtimelistService } from './punchtimelist.service';

describe('PunchtimelistService', () => {
  let service: PunchtimelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunchtimelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
