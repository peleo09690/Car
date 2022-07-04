import { IColumnData } from './column-data.model';
import { IDisplayColumn } from './display-column.model';

export interface IFilterBy {
  filterKey: string;
  condition: string | boolean;
}

export interface ITableConfig {
  columnDefinition: Array<IDisplayColumn>;
  pagination?: IColumnData;
  stickyHeader?: boolean;
  filterBy?: Array<IFilterBy>;
  expandable?: boolean;
  isDialog?: boolean;
  noScroll?: boolean;
}

export class TableConfig implements ITableConfig {
  constructor(
    public columnDefinition: Array<IDisplayColumn>,
    public pagination: IColumnData,
    public stickyHeader?: boolean,
    public filterBy?: Array<IFilterBy>,
    public expandable?: boolean,
    public isDialog?: boolean,
    public noScroll?: boolean
  ) { }
}


export interface BtnAction {
  action: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowItem: any;
}
