import { TestBed } from '@angular/core/testing';

import { ProfileDataEntryService } from './profile-data-entry.service';

describe('ProfileDataEntryService', () => {
  let service: ProfileDataEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDataEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
