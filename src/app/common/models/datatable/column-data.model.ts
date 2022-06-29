
export interface IOrder {
  columnName: string;
  direction: string;
}

export class ColumnOrder implements IOrder {
  constructor(public columnName: string, public direction: string) { }
}

export interface IColumnData {
  page: number;
  limit: number;
  order: IOrder;
  count?: number;
}

export class ColumnData implements IColumnData {
  constructor(
    public page: number,
    public limit: number,
    public order: IOrder,
    public count?: number
  ) { }
}

