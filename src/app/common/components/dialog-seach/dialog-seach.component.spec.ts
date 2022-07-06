import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSeachComponent } from './dialog-seach.component';

describe('DialogSeachComponent', () => {
  let component: DialogSeachComponent;
  let fixture: ComponentFixture<DialogSeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogSeachComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
