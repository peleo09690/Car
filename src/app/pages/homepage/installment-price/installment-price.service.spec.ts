/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstallmentPriceService } from './installment-price.service';

describe('Service: InstallmentPrice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstallmentPriceService]
    });
  });

  it('should ...', inject([InstallmentPriceService], (service: InstallmentPriceService) => {
    expect(service).toBeTruthy();
  }));
});
