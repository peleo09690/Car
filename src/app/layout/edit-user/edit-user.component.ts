import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

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

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }
  handelClose(): void {
    this.eventHandlerClose.emit(true);
  }
}
