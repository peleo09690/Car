/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ButtonConfig, IConfigSearch } from '../../models';
import { DialogOption, DialogSeachComponent } from '../dialog-seach/dialog-seach.component';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.scss']
})
export class GroupSearchComponent implements OnChanges {
  // #region Decorator
  @Input() searchConfig!: IConfigSearch;
  @Input() btnConfig!: ButtonConfig;
  @Output() handleBtnSubmitClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleBtnDetailClicked: EventEmitter<any> = new EventEmitter<any>();
  // #endregion
  public panelOpenState = true;

  public searchGroup: FormGroup = new FormGroup({});

  public icon: string = 'keyboard_arrow_up';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchConfig'].currentValue) {
      const group: any = {};
      this.searchConfig.config.map((el) => {
        group[el.id] = el.defaultValue ? new FormControl(el.defaultValue, []) : new FormControl(null, []);
      });
      this.searchGroup = new FormGroup(group);
    }
  }

  onBtnSearchClk(): void {
    this.handleBtnSubmitClicked.emit(this.searchGroup.value);
  }

  handleExpansion(): void {
    this.panelOpenState = !this.panelOpenState;
    if (this.panelOpenState) {
      this.icon = 'keyboard_arrow_up';
    } else {
      this.icon = 'search';
    }
  }

  onBtnAddClick(): void {
    this.handleBtnDetailClicked.emit({ addNew: true });
  }
  onBtnExportClick(): void {
  }
  handleGetDataDialog(data: any,id:string): void {
    let dialog = this.dialog.open(DialogSeachComponent, {
      data: data?.dataDialogSeach
    });
    dialog.afterClosed().subscribe((x:any)=>{
      this.searchGroup.get(id)?.setValue(x.user_name);
    });
  }
}
