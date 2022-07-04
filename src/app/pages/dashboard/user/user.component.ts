import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogOption } from '@common/components/dialog-seach/dialog-seach.component';
import { BtnAction, ButtonConfig, DateTimeSearch, IConfigSearch, IndexColumn, InputSearch, IOption, ITableConfig, OptionButtonColumn, TextColumn } from '@common/models';
import { DataModel } from '@core/models/http-response.model';
import { DataEditUser } from 'src/app/layout/edit-user/edit-user.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public options: Array<IOption> = [
    { id: 'delete', name: 'Delete', icon: 'iconDeleteRed' }
  ];
  public config: ITableConfig = {
    columnDefinition: [
      new IndexColumn('index', '#', 5, false, true, true),
      new TextColumn('user_id_format', 'Id Format', 15, true, 'center', true, false, true),
      new TextColumn('user_name', 'User Name', 10, true, 'center', false, false, true),
      new TextColumn('mail', 'Mail', 20, true, 'center', false, false, true, '', false, '', true),
      new TextColumn('phone_number', 'Phone Number', 10, true, 'center', false, false, true, '', false, undefined, true),
      new TextColumn('address', 'Address', 20, true, 'center', false, false, true, '', false, undefined, true),
      new OptionButtonColumn(this.options, 5, true, false)
    ]
  };
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
  public searchConfig: IConfigSearch = {
    title: 'User Search',
    config: [
      new InputSearch('customerName', 'Customer Name', 'Customer Name', false, undefined, null, this.dataDialog)
    ]
  };
  public btnConfig = new ButtonConfig(true, true, false, false);

  public data!: DataModel;
  isOpen: boolean = false;
  dataPopup: DataEditUser = {
    headerContent: 'Add New',
    titleButton: 'Create',
    data: {}
  };
  constructor(
    private userService: UserService
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.callTestApi();
  }
  callTestApi(): void {
    // const payload: RequestUser = {
    //   userName: '',
    //   flgAccountLock: null,
    //   flgAuction: null,
    //   page: environment.pageIndex,
    //   size: environment.pageSize
    // };
    this.userService.getUser().subscribe((res) => {
      let dataClone: DataModel;
      if (res) {
        dataClone = {
          length: res.data.length,
          currentPage: 1,
          noRecordInPage: 10,
          results: res.data,
          totalPage: 1,
          totalRecords: res.data.length
        };
        this.data = { ...dataClone };
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventHandlerClose(event: any): void {
    this.isOpen = false;

  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventHandlerBtn(event: any): void {
    console.log(event);
    if (event.type === 'Create') {
      let payload = { ...event.data };
      // eslint-disable-next-line camelcase
      payload.url_redirect = 'http://domo';
      // eslint-disable-next-line camelcase
      payload.flag_admin = '1';
      // eslint-disable-next-line camelcase
      payload.flg_account_lock = event.flg_account_lock ? 0 : 1;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.userService.createUser(payload).subscribe((x: any) => {
        this.callTestApi();
      });
    } else {
      let payload = { ...event.data };
      // eslint-disable-next-line camelcase
      payload.flg_account_lock = 1;
      // eslint-disable-next-line camelcase
      payload.url_redirect = 'http://domo';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.userService.updateUser(payload).subscribe((x: any) => {
        this.callTestApi();
      });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handelDbClick(event: any): void {
    this.isOpen = true;
    this.dataPopup = {
      headerContent: 'Edit User',
      titleButton: 'Update',
      data: { ...event }
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleGroupSearchClk(event: any): void {
    console.log(event);
  }
  handleActionBtn(event: BtnAction): void {
    console.log(event);
    if (event.action === 'delete') {
      const request = new HttpParams()
        .set('exKey', event.rowItem.ex_key);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // this.userService.deleteUser(event.rowItem.user_id_format,request).subscribe((x: any) => {
      //   this.callTestApi();
      // });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleBtnDetailClicked(event: any): void {
    this.isOpen = true;
    this.dataPopup = {
      headerContent: 'Add New User',
      titleButton: 'Create',
      data: {}
    };
  }
}
