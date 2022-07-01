export interface IDropList {
  value: string;
  label: string;
}

export interface ISearchCommon {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  format?: number | string;
  defaultValue?: string | Date;
  data?: IDropList[],
  validtorType?: string | null;
}

export class InputSearch implements ISearchCommon {
  type = 'input';
  constructor(
    public id: string,
    public name: string,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public validatorType: string | null = null
  ) { }
}

export class DropListSearch implements ISearchCommon {
  type = 'select';
  constructor(
    public id: string,
    public name: string,
    public data: IDropList[],
    public defaultValue: string,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string
  ) { }
}

export class DateTimeSearch implements ISearchCommon {
  type = 'date';
  constructor(
    public id: string,
    public name: string,
    public placeholder: string = '',
    public disabled: boolean = false,
    public format?: number | string,
    public defaultValue?: Date
  ) { }
}


export interface IButtonConfig {
  btnSearchIcon: boolean;
  btnSearchLabel?: boolean;
  btnExportCsv?: boolean;
  btnAddMore?: boolean;
}

export class ButtonConfig implements IButtonConfig {
  constructor(
    public btnSearchIcon: boolean = true,
    public btnAddMore: boolean = false,
    public btnSearchLabel: boolean = false,
    public btnExportCsv: boolean = false
  ) { }
}


export interface IConfigSearch {
  title: string;
  config: Array<ISearchCommon>;
}
