import { TestBed } from '@angular/core/testing';

import { DialogSeachService } from './dialog-seach.service';

describe('DialogSeachService', () => {
  let service: DialogSeachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogSeachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
