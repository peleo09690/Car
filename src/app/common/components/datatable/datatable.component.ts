/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataModel } from '@core/models';
import { find, isEqual } from 'lodash';
import { IDisplayColumn } from '../../models/datatable/display-column.model';
import { BtnAction, ITableConfig } from '../../models/datatable/table-config.model';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnChanges, AfterViewInit {
  // #region Decorator
  @Input() public tableConfig!: ITableConfig;
  @Input() public dataSource!: DataModel;
  @Output() public tableClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public handleSort: EventEmitter<any> = new EventEmitter<any>();
  @Output() public handleBtnAction: EventEmitter<BtnAction> = new EventEmitter<BtnAction>();

  @ViewChild('matTable', {
    static: false
  }) public matTable!: MatTable<any>;
  // #endregion

  public utils = Utils;
  public columnDefinition: Array<IDisplayColumn> = [];
  public displayColumns: Array<string> = [];
  public rowData = Array<any>();

  public noScroll: boolean = false;
  public fixSecondColumnLeftPos = false;
  public data = new MatTableDataSource();
  public toolTipText: boolean = false;
  public selectedRow: any;

  public selectionModel: SelectionModel<any> = new SelectionModel<any>(true, []);

  public ngAfterViewInit(): void {
    if (this.matTable) {
      this.matTable.updateStickyColumnStyles();
    }
  }

  public ngOnInit(): void {
    this.initData();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'] && changes['dataSource'].currentValue) {
      const data: unknown[] = changes['dataSource'].currentValue.results;

      this.data = new MatTableDataSource(data);
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

  public onBtnClick(action: string, event: object): void {
    this.handleBtnAction.emit({ action, rowItem: event });
  }

  public onClickable(event: any): void {
    console.log(event);
  }

  public announceSortChange(event: any): void {
    console.log(event);
  }
  public onCheckBoxAllChange(event: any): void {
    if (this.isCheckedAll()) {
      this.selectionModel.clear();
      return;
    }
    this.selectionModel.select(...this.dataSource.results);
    this.tableClick.emit('clicked');
  }

  public isCheckedAll(): boolean {
    const numSelected = this.selectionModel.selected.length;
    const numRows = this.dataSource.results.length;
    return numSelected === numRows;
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

  public isLastChildNotSticky(index: number): string {
    const lastColumn = this.columnDefinition[index + 1];
    if (lastColumn && lastColumn.stickyEnd) {
      return `${this.columnDefinition[index] ? this.columnDefinition[index].weight : 0} px`;
    }
    return 'auto';
  }
  private initData(): void {
    this.noScroll = this.tableConfig.noScroll || false;
    this.displayColumns = this.columnDefinition
      .map((value) => value.id);
  }
}
