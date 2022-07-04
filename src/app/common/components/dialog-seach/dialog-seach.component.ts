import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSeachService } from './dialog-seach.service';




export class ListHeader {
  titleHeader: string = '';
  nameColum: string = '';
  width?: number = 100;
  align?: 'right' | 'left' | 'center' = 'right';
  format?: 'string' | 'YYYYMMDD' | 'YYYYMMDDHHMM' | 'YYYYMMDDHHMMSS' = 'string';
  sticky?: boolean = false;
}

export class DialogOption {
  title: string = '';
  table: string = '';
  listHeader: Array<ListHeader> = [];
  width?: number = 300;
  height?: number = 540;
  litmit?: number = 100;
}

@Component({
  selector: 'app-dialog-seach',
  templateUrl: './dialog-seach.component.html',
  styleUrls: ['./dialog-seach.component.scss']
})
export class DialogSeachComponent implements OnInit {
  dataOption: DialogOption = new DialogOption;
  widthTable: number = 0;
  query: string = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listData: Array<any> = [];
  dataSeach: String = '';
  dataChoosse: string = '';
  constructor(
    private dialogRef: MatDialogRef<DialogSeachComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogOption,
    private dialogService: DialogSeachService
  ) {
    this.handelSetInitData(data);
    this.dialogRef.addPanelClass('app-full-bleed-dialog');
    this.dialogRef.disableClose = true;
    this.dialogRef._containerInstance._config.height = this.dataOption.height + 'px';
    this.dialogRef._containerInstance._config.maxHeight = this.dataOption.height + 'px';
    this.dialogRef._containerInstance._config.width = 300 + 'px';
    this.dialogRef._containerInstance._config.maxWidth = this.dataOption.width + 'px';
  }

  handelSetInitData(data: DialogOption): void {
    let option = new DialogOption();
    this.dataOption = { ...option, ...data };
    const list: ListHeader[] = [];
    data.listHeader.map(x => {
      const listHeader = new ListHeader();
      let a = new ListHeader();
      a = { ...listHeader, ...x };
      list.push(a);
    });
    this.dataOption.listHeader = JSON.parse(JSON.stringify(list));
  }

  ngOnInit(): void {
    this.handelGetdataInit();
  }
  handelGetdataInit(): void {
    this.widthTable = this.dataOption.listHeader.reduce(
      (total, thing) => total + (thing.width ? thing.width : 0),
      56
    );
    if (this.dataOption.listHeader.length > 0) {
      this.query = this.query + 'select ';
      this.dataOption.listHeader.map((x, index) => {
        this.query = this.query + x.nameColum;
        this.query = this.dataOption.listHeader.length - 1 === index ? this.query + ' ' : this.query + ',';
      });
      this.query = this.query + 'from ' + this.dataOption.table;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.dialogService.getDataDialogCommon(this.query + ' limit ' + this.dataOption.litmit).subscribe((x:any) => {
      if (x.data.length > 0) {
        this.listData = JSON.parse(JSON.stringify(x.data));
      }
    });
  }
  handelCancel(): void {
    this.dialogRef.close();
  }
  handelSeach(): void {
    let seachQuery = this.query + ' where ';
    this.dataOption.listHeader.map((x, index) => {
      seachQuery = seachQuery + (index === 0 ? '' : ' or ') + x.nameColum + ` like '%` + this.dataSeach + `%' `;
    });
    seachQuery = seachQuery + ' limit ' + this.dataOption.litmit;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.dialogService.getDataDialogCommon(seachQuery).subscribe((x:any) => {
      this.listData = JSON.parse(JSON.stringify(x.data));
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverFormat(value: any, format: any): any {
    switch (format) {
    case 'YYYYMMDD':
      if (Date.parse(value)) {
        value = this.formatDateYYYYMMDD(value);
        break;
      }
      value = '';
      break;
    case 'YYYYMMDDHHMM':
      if (Date.parse(value)) {
        value = this.formatDateTimeYYYYMMDDHHMM(value);
        break;
      }
      value = '';
      break;
    case 'YYYYMMDDHHMMSS':
      if (Date.parse(value)) {
        value = this.formatDateTimeYYYYMMDDHHMMSS(value);
        break;
      }
      value = '';
      break;
    }
    return value;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  clickChoose(data: object) {
    this.dataChoosse = data.toString();
  }
  handelDblclick(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let dataReturn: any = {};
    let data = this.dataChoosse.split(',');
    this.dataOption.listHeader.map((x, index) => {
      dataReturn[x.nameColum] = data[index];
    });
    this.dialogRef.close(dataReturn);
  }
  coverObjectToString(value: object): string {
    return value.toString();
  }
  handelButtonOk(): void {
    if (!this.dataChoosse || this.listData.findIndex((x) => x.toString() === this.dataChoosse) < 0) {
      return;
    }

    // let index = this.dataOption.listHeader.findIndex(x => x.nameColum == this.dataOption.columReturn);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let dataReturn: any = {};
    let data = this.dataChoosse.split(',');
    this.dataOption.listHeader.map((x, index) => {
      dataReturn[x.nameColum] = data[index];
    });
    this.dialogRef.close(dataReturn);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatDateYYYYMMDD(date: any): any {
    var d = new Date(date);
    var yyyy = d.getFullYear();
    var mm = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1); // getMonth() is zero-based
    var dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    return [yyyy, mm, dd].join('/');
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatDateTimeYYYYMMDDHHMMSS(date: any):any {
    var d = new Date(date);
    var yyyy = d.getFullYear();
    var mm = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1); // getMonth() is zero-based
    var dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    var hh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    var min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var ss = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    return [yyyy, mm, dd].join('/') + ' ' + [hh, min, ss].join(':');
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatDateTimeYYYYMMDDHHMM(date: any):any {
    var d = new Date(date);
    var yyyy = d.getFullYear();
    var mm = d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1); // getMonth() is zero-based
    var dd = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
    var hh = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
    var min = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    return [yyyy, mm, dd].join('/') + ' ' + [hh, min].join(':');
  }
  totalLenhthSticky(j: number): number {
    let total = 56;
    this.dataOption.listHeader.map((x, index) => {
      if (index < j) {
        total += x.width ? x.width : 0;
      }
    });
    return total;
  }
}
