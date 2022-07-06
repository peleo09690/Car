import { TestBed } from '@angular/core/testing';

import { ManageHttpService } from './manage-http.service';

describe('ManageHttpService', () => {
  let service: ManageHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
