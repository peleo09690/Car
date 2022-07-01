import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Array<SubTasks>;
}
export interface SubTasks {
  name: string;
  completed: boolean;
  color: ThemePalette;
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
  // providers: [
  //   {
  //     provide: MAT_RADIO_DEFAULT_OPTIONS,
  //     useValue: { color: 'primary' },
  //   },
  // ],
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  currentOption: string = '';
  options: string[] = ['option1', 'option2', 'option3', 'option4'];


  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: undefined,
    subtasks: [
      { name: 'check1', completed: false, color: undefined },
      { name: 'check2', completed: false, color: undefined },
      { name: 'check3', completed: false, color: undefined }
    ]
  };
  allComplete: boolean = false;
  updateAllComplete(): void {
    this.allComplete = (this.task.subtasks !== null && this.task?.subtasks?.every(t => t.completed)) || false;
  }
  someComplete(): boolean {
    if (this.task.subtasks === null) {
      return false;
    }
    return false;
    // return (this.task?.subtasks?.filter(t => t.completed === true).length > 0 && !this.allComplete) || false;
  }
  setAll(completed: boolean): void {
    this.allComplete = completed;
    if (this.task.subtasks === null) {
      return;
    }
    this.task.subtasks?.forEach(t => (t.completed = completed));
  }
}
