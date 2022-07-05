import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordMailComponent } from './forgot-password-mail.component';

describe('ForgotPasswordMailComponent', () => {
  let component: ForgotPasswordMailComponent;
  let fixture: ComponentFixture<ForgotPasswordMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordMailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
