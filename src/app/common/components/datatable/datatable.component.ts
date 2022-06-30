/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { each, find, isEqual } from 'lodash';
import { IDisplayColumn } from '../../models/datatable/display-column.model';
import { ITableConfig } from '../../models/datatable/table-config.model';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnChanges, AfterViewInit {
  // #region Decorator
  @Input() tableConfig!: ITableConfig;
  @Input() dataSource: Array<object> = [];
  @Input() selectionModel: SelectionModel<any> = new SelectionModel<any>();
  @Output() tableClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() hanldeSort: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('matTable', {
    static: false
  }) matTable!: MatTable<any>;
  // #endregion

  utils = Utils;
  public columnDefinition: Array<IDisplayColumn> = [];
  public displayColumns: Array<string> = [];
  public rowData = Array<any>();

  public noScroll: boolean = false;
  public fixSecondColumnLeftPos = false;
  public data = new MatTableDataSource();
  public toolTipText: boolean = false;

  ngAfterViewInit(): void {
    if (this.matTable) {
      this.matTable.updateStickyColumnStyles();
    }
  }

  ngOnInit(): void {
    this.initData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'].currentValue) {
      this.data = new MatTableDataSource(changes['dataSource'].currentValue);
    }
    if (changes['tableConfig'] && changes['tableConfig'].currentValue) {
      this.columnDefinition = this.tableConfig.columnDefinition;
    }
  }

  public isNumber(format: any): boolean {
    return typeof format === 'number';
  }

  public isDateTime(format: any): boolean {
    return typeof format === 'string';
  }

  public onRowClick(event: any): void {
    console.log(event);
  }

  public onClickable(event: any): void {
    console.log(event);
  }

  public announceSortChange(event: any): void {
    console.log(event);
  }
  public onCheckBoxAllChange(event: any): void {
    if (this.selectionModel) {
      if (event.checked) {
        if (this.selectionModel.isMultipleSelection()) {
          this.selectionModel.clear();
          each(this.rowData, (v, idx) => {
            this.selectionModel.select(v);
          });
        }
      } else {
        this.selectionModel.clear();
      }
      this.tableClick.emit('clicked');
    }
  }

  public isCheckedAll(): boolean {
    if (this.selectionModel) {
      const numSelected = this.selectionModel.selected.length;
      const numRows = this.rowData.length;
      return numSelected === numRows;
    }
    return false;
  }

  public onCheckBoxItemChange(row: any): void {
    const foundRow = find(this.rowData, o => isEqual(o.id, row.id));
    if (foundRow) {
      this.selectionModel.toggle(foundRow);
    }
    this.tableClick.emit('clicked');
  }

  public isCheckedItem(row: any): boolean {
    const foundRow = find(this.rowData, o => isEqual(o.id, row.id));
    if (foundRow) {
      return this.selectionModel.isSelected(foundRow);
    }

    return false;
  }

  public pipeNumber(format: number | string): number {
    return typeof format === 'number' ? format : 0;
  }

  public pipeDateTime(format: number | string): string {
    return typeof format === 'string' ? format : '0';
  }
  public onMouseOver(event: any, data: string): void {
    if (event.target.className.split(' ').includes('cell-overflow')) {
      const selectElement = event.target;
      if (selectElement.offsetWidth === selectElement.scrollWidth || Array.isArray(data)) {
        this.toolTipText = true;
      } else {
        this.toolTipText = false;
      }
    }
  }
  private initData(): void {
    this.noScroll = this.tableConfig.noScroll || false;
    this.displayColumns = this.columnDefinition
      .map((value) => value.id);
  }
}
