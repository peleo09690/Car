/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InstallmentPriceComponent } from './installment-price.component';

describe('InstallmentPriceComponent', () => {
  let component: InstallmentPriceComponent;
  let fixture: ComponentFixture<InstallmentPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallmentPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
