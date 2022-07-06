import { Component, OnInit } from '@angular/core';
import { DialogOption } from '@common/components/dialog-seach/dialog-seach.component';
import { BtnAction, ButtonConfig, IConfigSearch, IndexColumn, InputSearch, IOption, ITableConfig, OptionButtonColumn, TextColumn } from '@common/models';
import { DataModel } from '@core/models/http-response.model';
import { environment } from '@env/environment';
import { DataEditUser } from 'src/app/layout/components/edit-user/edit-user.component';
import { RequestUser } from './user.model';
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
      new TextColumn('userIdFormat', 'Id Format', 15, true, 'center', true, false, true),
      new TextColumn('userName', 'User Name', 10, true, 'center', false, false, true),
      new TextColumn('mail', 'Mail', 20, true, 'center', false, false, true, '', false, '', true),
      new TextColumn('phoneNumber', 'Phone Number', 10, true, 'center', false, false, true, '', false, undefined, true),
      new TextColumn('address', 'Address', 20, true, 'center', false, false, true, '', false, undefined, true),
      new OptionButtonColumn(this.options, 5, true, false)
    ]
  };
  public dataDialog: DialogOption = {
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
        width: 500
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
  public isOpen: boolean = false;
  public dataPopup: DataEditUser = {
    headerContent: 'Add New',
    titleButton: 'Create',
    data: {}
  };
  public constructor(
    private userService: UserService
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit(): void {
    this.callTestApi();
  }
  public callTestApi(): void {
    const payload: RequestUser = {
      userName: null,
      page: environment.pageIndex,
      size: environment.pageSize
    };
    this.userService.getUser(payload).subscribe((res) => {
      if (res) {
        this.data = res.data as DataModel;
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public eventHandlerClose(event: any): void {
    this.isOpen = false;

  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public eventHandlerBtn(event: any): void {
    console.log(event);
    if (event.type === 'Create') {
      let payload = { ...event.data };
      // eslint-disable-next-line camelcase
      payload.urlRedirect = 'http://domo';
      // eslint-disable-next-line camelcase
      // eslint-disable-next-line camelcase
      payload.flagAdmin = event.flagAdmin ? '1' : '0';
      delete payload.userId;
      delete payload.exKey;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.userService.createUser(payload).subscribe((x: any) => {
        this.callTestApi();
      });
    } else {
      let payload = { ...event.data };
      // eslint-disable-next-line camelcase
      payload.flagAdmin = payload.flagAdmin ? '1' : '0';

      // eslint-disable-next-line camelcase
      // payload.url_redirect = 'http://domo';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.userService.updateUser(payload).subscribe((x: any) => {
        this.callTestApi();
      });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public handelDbClick(event: any): void {
    this.isOpen = true;
    this.dataPopup = {
      headerContent: 'Edit User',
      titleButton: 'Update',
      data: { ...event }
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public handleGroupSearchClk(event: any): void {
    console.log(event);
  }
  public handleActionBtn(event: BtnAction): void {
    console.log(event);
    if (event.action === 'delete') {
      // let payload = {
      //   userIdFormat: event.rowItem.userIdFormat,
      //   exKey: event.rowItem.exKey
      // };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // this.userService.deleteUser(event.rowItem.userIdFormat).subscribe((x: any) => {
      //   this.callTestApi();
      // });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public handleBtnDetailClicked(event: any): void {
    this.isOpen = true;
    this.dataPopup = {
      headerContent: 'Add New User',
      titleButton: 'Create',
      data: {}
    };
  }
}
