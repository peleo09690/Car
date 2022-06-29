export interface IOption {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  // condition?: { id: string; match: any; result?: boolean; result2?: boolean };
  // conditions?: { id: string; match: any; result?: boolean; result2?: boolean }[];
}

export interface IDisplayColumn {
  id: string;
  type: string;
  name: string;
  weight?: number;
  alignCenter?: boolean;
  alignRight?: boolean;
  showTooltip?: boolean;
  tooltipAlign?: string;
  className?: string;
  options?: Array<IOption>;
  orderable?: boolean; // this can be either boolean or string id (for backward compatiable), to fix nested object compatibility;
  clickable?: boolean;
  disabled?: boolean;
  sticky?: boolean;
  stickyEnd?: boolean;
  localizedTextList?: string;
  format?: string | number;
}

export class TextColumn implements IDisplayColumn {
  type = 'text';
  constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public showTooltip: boolean = false,
    public tooltipAlign?: string,
    public sticky?: boolean,
    public alignCenter: boolean = false,
    public alignRight: boolean = false,
    public className?: string,
    public stickyEnd?: boolean,
    public format?: string | number,
    public orderable: boolean = true
  ) { }
}

export class SelectColumn implements IDisplayColumn {
  type = 'select';
  constructor(
    public id: string,
    public name: string,
    public weight?: number,
    public orderable: boolean = true,

    public alignCenter?: boolean,
    public alignRight?: boolean,
    public className?: string,

    public clickable?: boolean,
    public disabled?: boolean,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class NumberColumn implements IDisplayColumn {
  type = 'number';
  constructor(
    public id: string,
    public name: string,
    public weight: number,
    public orderable: boolean = true,
    public alignCenter?: boolean,
    public alignRight?: boolean,
    public clickable?: boolean,
    public format?: number, // ex: 1, 2 will formatted 0.1, 0.11
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class StatusColumn implements IDisplayColumn {
  type = 'status';
  constructor(
    public id: string,
    public name: string,
    public weight: number,
    public orderable: boolean = true,
    public alignCenter?: boolean,
    public alignRight?: boolean,
    public clickable?: boolean,
    public sticky?: boolean,
    public stickyEnd?: boolean,
    public localizedTextList?: string,
    public isHtml?: boolean
  ) { }
}

export class OptionColumn implements IDisplayColumn {
  type = 'options';
  id = 'options';
  name = 'Options';
  alignRight = false;
  showSelectAll = false;

  constructor(
    public options: Array<IOption>,
    public weight: number,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class OptionMenuColumn implements IDisplayColumn {
  type = 'menu';
  id = 'menu';
  name = 'Options';
  alignRight = false;
  showSelectAll = false;

  constructor(
    public options: Array<IOption>,
    public weight: number,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class OptionButtonColumn implements IDisplayColumn {
  type = 'button';
  id = 'button';
  name = 'Options';
  alignRight = false;
  showSelectAll = false;

  constructor(
    public options: Array<IOption>,
    public weight: number,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class CheckboxColumn implements IDisplayColumn {
  type = 'selection';
  id = 'selection';
  name = 'common-names.select';
  alignRight = false;

  constructor(
    public weight: number,
    public showSelectAll: boolean,
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}

export class IndexColumn implements IDisplayColumn {
  type = 'index';

  constructor(
    public id: string,
    public name: string,
    public weight: number,
    public orderable?: boolean,
    public alignCenter?: boolean,
    public sticky?: boolean
  ) { }
}

export class DateTimeColumn implements IDisplayColumn {
  type = 'date';

  constructor(
    public id: string,
    public name: string,
    public weight: number,
    public orderable: boolean = true,
    public alignRight?: boolean,
    public clickable?: boolean,
    public format: string = 'YYYY/MM/DD',
    public sticky?: boolean,
    public stickyEnd?: boolean
  ) { }
}
