import { TestBed } from '@angular/core/testing';

import { ForgotPasswordMailService } from './forgot-password-mail.service';

describe('ForgotPasswordMailService', () => {
  let service: ForgotPasswordMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotPasswordMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
