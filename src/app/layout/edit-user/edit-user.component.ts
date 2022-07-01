import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() eventHandlerClose: EventEmitter<any> = new EventEmitter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() data: any;
  @Input() headerContent!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formSeach: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) { }


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    this.formSeach = this.fb.group({
      fistName: [this.data?.customer_first_name],
      lastName: [this.data?.customer_last_name],
      customerName: [this.data?.customer_name],
      mail: [this.data?.mail],
      phone: [this.data?.phone_number]
    });

  }
  handelClose(): void {
    this.eventHandlerClose.emit(true);
  }
  handelSubmit(): void {
    console.log(this.formSeach.valid);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validMail(event: any): void {
    if (/^([a-z0-9A-Z](\.?[a-z0-9A-Z]){1,})\@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(event.target.value)) {
      this.formSeach.get('mail')?.setErrors({ 'incorrect': true });
    }
  }
}
