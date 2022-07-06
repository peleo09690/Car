/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  @Output() public eventHandlerClose: EventEmitter<any> = new EventEmitter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() public eventHandlerBtnOke: EventEmitter<any> = new EventEmitter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public formSeach: FormGroup = new FormGroup({});
  @Input() public data: DataEditUser = {
    headerContent: 'Add New',
    titleButton: 'Create',
    data: {}
  };
  public constructor(private fb: FormBuilder) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit(): void {
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  private ngOnChanges(changes: SimpleChanges): void {
    this.formSeach = this.fb.group({
      userId: [this.data.data ? this.data.data?.userId : ''],
      userName: [this.data.data ? this.data.data?.userName : ''],
      mail: new FormControl(this.data.data ? this.data.data?.mail : '', [Validators.email]),
      address: [this.data.data ? this.data.data?.address : ''],
      phoneNumber: [this.data.data ? this.data.data?.phoneNumber : ''],
      flagAdmin: [this.data.data.flagAdmin === '1' ? true : false],
      exKey: [this.data.data.exKey]
    });
  }
  public handelClose(): void {
    this.eventHandlerClose.emit(true);
  }
  public handelSubmit(): void {
    console.log(this.formSeach.value);
    this.eventHandlerBtnOke.emit({ data: this.formSeach.value, type: this.data.titleButton });
  }
}
