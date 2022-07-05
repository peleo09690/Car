/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit, OnChanges {
  @Input() public dataHandle!: any;
  @Output() public handleClose: EventEmitter<any> = new EventEmitter<any>();

  public formGroup: FormGroup = new FormGroup({});

  public constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataHandle'].currentValue && changes['dataHandle'].currentValue !== changes['dataHandle'].previousValue) {
      this.initForm(changes['dataHandle'].currentValue);
    } else {
      this.initForm();
    }

  }

  private initForm(data?: any): void {
    this.formGroup = this.fb.group({
      name: new FormControl(data ? data.name : null),
      representativePostCode: new FormControl(data ? data.representativePostCode : null),
      representativeAddress: new FormControl(data ? data.representativeAddress : null),
      mail: new FormControl(data ? data.mail : null),
      joinDate: new FormControl(data ? new Date(data.joinDate) : null)
    });
  }
}
