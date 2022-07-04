/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export interface DataEditUser {
  headerContent: string,
  titleButton: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() eventHandlerClose: EventEmitter<any> = new EventEmitter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() eventHandlerBtnOke: EventEmitter<any> = new EventEmitter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSeach: FormGroup = new FormGroup({});
  @Input() data: DataEditUser = {
    headerContent: 'Add New',
    titleButton: 'Create',
    data: {}
  };
  constructor(private fb: FormBuilder) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.formSeach = this.fb.group({
      // eslint-disable-next-line camelcase
      userId: [this.data.data ? this.data.data?.userId : ''],
      userName: [this.data.data ? this.data.data?.userName : ''],
      mail: [this.data.data ? this.data.data?.mail : ''],
      address: [this.data.data ? this.data.data?.address : ''],
      phoneNumber: [this.data.data ? this.data.data?.phoneNumber : ''],
      flagAdmin: [this.data.data.flagAdmin ==='1'  ? true : false],
      exKey: [this.data.data.exKey]
    });
  }
  handelClose(): void {
    this.eventHandlerClose.emit(true);
  }
  handelSubmit(): void {
    console.log(this.formSeach.value);
    this.eventHandlerBtnOke.emit({data: this.formSeach.value, type: this.data.titleButton });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validMail(event: any): void {
    if (/^([a-z0-9A-Z](\.?[a-z0-9A-Z]){1,})\@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(event.target.value)) {
      this.formSeach.get('mail')?.setErrors({ 'incorrect': true });
    }
  }
}
