# Apply Common Components 

The Common Module to implement some components such as DataTable, Dialog Search, ... to sharing for the screen if you want to implementation.

## How to use its

Required to import Common Module with root in your module
``` typescript
  imports: [
    ...,
    CommonAppModule.forRoot() // MUST BE IMPORT THIS LINE TO MODULE
    ...
  ]
```

## Data table
### Configuration for the data table. 
``` html
<app-datatable 
  [tableConfig]="tableConfig"
></app-datatable>
```
It have options to handle

``` typescript
public options: Array<IOption> = [
  { id: 'delete', name: 'Delete', icon: 'delete' }
];

public tableConfig: ITableConfig = {
  columnDefinition: [
    new IndexColumn('propertyIndex', 'Header Label', <width-column>),
    new TextColumn('propertyName', 'Header Label', <width-column>),
    new OptionButtonColumn(this.options, <width-column>)
  ]
};
```
How to know the property of Column, please refer to `src/app/common/models/datatable/display-column.model.ts` to understand class to define Column.

### Input the data source when having data response from API
``` html
<app-datatable 
  [tableConfig]="tableConfig"
  [dataSource]="data" ---> input data response
></app-datatable>
```

``` typescript
public data!: DataModel;

public initData() {
  this.http.getUser(payload).subscribe((res) => {
    if (res && res.data) {
      this.data = res.data as DataModel; // Binding response data to data source
    }
  });
}
```

### Handle Event output when click sort header or Row click
Table Clicked Handle
``` html
<app-datatable 
  [tableConfig]="tableConfig"
  [dataSource]="data"
  (tableClick)="handleClick($event)" ---> handle row item has been clicked
></app-datatable>
```

``` typescript
public handleClick(event: object): void {
  // TODO your bussiness
}
```
Sort Header clicked
``` html
<app-datatable 
  [tableConfig]="tableConfig"
  [dataSource]="data"
  (hanldeSort)="handleSort($event)" ---> handle Sort header has been clicked
></app-datatable>
```

``` typescript
public handleClick(event: object): void {
  // TODO your bussiness
}
```
Handle button in row item clicked
``` html
<app-datatable 
  [tableConfig]="tableConfig"
  [dataSource]="data"
  (handleBtnAction)="handleActionBtn($event)" ---> handle Sort header has been clicked
></app-datatable>
```

``` typescript
public handleActionBtn(event: BtnAction): void {
  // TODO your bussiness
}
```

## Group Search
### Configuration for Group Search
``` html
<app-group-search [searchConfig]="searchConfig"></app-group-search>
```
``` typescript
public searchConfig: IConfigSearch = {
  title: 'Your title',
  config: [
    new InputSearch('nameInput', 'ID', '顧客ID'),
    new DateTimeSearch('nameDateTime', '会場名（グループ）', new Date().toISOString(), false, 'YYYY/MM/DD')
  ]
};
```
How to know the property of Type of Input search/Date time/Dropdown list/..., please refer to `src/app/common/models/group-button/buttons-config.models.ts` to understand class to define Column.

### Add Button for Search Group
``` html
<app-datatable 
  [searchConfig]="searchConfig"
  [btnConfig]="btnConfig" ---> Show button for search group
></app-datatable>
```

``` typescript
public btnConfig = new ButtonConfig();
```
Please declare the variable to create Group Button, if you don't want to show any the button in group, you can hide its.

``` typescript
public btnConfig = new ButtonConfig(false, false, false, false);
```
### Handle Event output when click any button in Group search
Same as our the data table as I stated above

## Dialog Search Common

kiểu dữ liệu đầu vào: 

``` typescript
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
```
Ví dụ
``` typescript
dataDialog: DialogOption = {
    title: 'User Infor',
    table: 't_user_info',
    listHeader: [
      {
        titleHeader: 'User Name',
        nameColum: 'user_name',
        width: 150,
        sticky: true
      },
      {
        titleHeader: 'Id Format',
        nameColum: 'user_id_format',
        width: 200
      },
      {
        titleHeader: 'Phone Number',
        nameColum: 'phone_number',
        width: 200
      },
      {
        titleHeader: 'Mail',
        nameColum: 'mail',
        width: 200
      }
    ]
  };
```



Cấu hình và lấy dữ liệu dialog common

``` typescript
let dialog = this.dialog.open(DialogSeachComponent, {
      data: data?.dataDialogSeach
    });
    dialog.afterClosed().subscribe((x:any)=>{
      this.searchGroup.get(id)?.setValue(x.user_id_format);
    });
```
[Back to README](../README.md)
