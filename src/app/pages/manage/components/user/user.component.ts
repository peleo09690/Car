import { BtnAction } from './../../../../common/models/datatable/table-config.model';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Sort } from "@angular/material/sort";
import { ButtonConfig, DateTimeSearch, DropListSearch, IConfigSearch, IDropList, InputSearch, ITableConfig, TextColumn } from "@common/models";
import { DataModel } from "@core/models";
import { environment } from '@env/environment';
import { RequestUser } from "../../models/user.model";
import { IndexColumn, IOption, OptionButtonColumn } from './../../../../common/models/datatable/display-column.model';
import { ManageHttpService } from './../../services/manage-http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public options: Array<IOption> = [
    { id: 'delete', name: 'Delete', icon: 'iconDeleteRed' }
  ];

  public tableConfig: ITableConfig = {
    columnDefinition: [
      new IndexColumn('index', '#', 5, false, false, true),
      new TextColumn('customer_id_format', 'ID', 100, false, undefined, true),
      new TextColumn('customer_name', 'Name', 100, true, 'above', true),
      new TextColumn('representative_post_code', 'Post Code', 100, false, undefined, undefined, true),
      new TextColumn('mail', 'E-mail', 200),
      new TextColumn('phone_number', 'Phone Number', 200, true, 'below'),
      new OptionButtonColumn(this.options, 5, true, true)
    ]
  };
  public data!: DataModel;

  public searchConfig: IConfigSearch = {
    title: 'User Search',
    config: [
      new InputSearch('id1', 'ID', '顧客ID'),
      new InputSearch('id2', 'ID', '顧客ID'),
      new InputSearch('id3', 'ID', '顧客ID'),
      new DateTimeSearch('from', '会場名（グループ）', new Date().toISOString(), false, 'YYYY/MM/DD'),
      new DateTimeSearch('to', '会場名（グループ）', new Date().toISOString(), false, 'YYYY/MM/DD')
    ]
  };

  public btnConfig = new ButtonConfig();

  public isShowDetail: boolean = false;
  public dataItem: any | null = null;

  public isLogin = false;
  public formGroup: FormGroup = new FormGroup({});

  public constructor(
    private fb: FormBuilder,
    private http: ManageHttpService
  ) {
    const userLogin = localStorage.getItem('id_token');
    if (userLogin) {
      this.isLogin = true;
      this.getUser();
    }
  }

  public ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: new FormControl('000056'),
      password: new FormControl('Nham123456'),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'grant_type': new FormControl('password')
    });
    const dataDrop: IDropList[] = [
      {
        value: '-1', label: 'All'
      },
      {
        value: '0', label: 'Female'
      },
      {
        value: '1', label: 'Male'
      }
    ];
    this.searchConfig.config.push(
      new DropListSearch('gender', 'Gender', dataDrop, '-1')
    );
  }

  public handleClick(event: any): void {
    this.dataItem = event;
    this.isShowDetail = true;
  }

  public handleSort(event: Sort): void {
    console.log(event);
  }

  public handleActionBtn(event: BtnAction): void {
    console.log(event);
  }

  public handleGroupSearchClk(event: any): void {
    console.log(event);
  }

  public handleAddNew(): void {
    this.isShowDetail = true;
    this.dataItem = null;
  }

  public closeDetail(): void {
    this.isShowDetail = false;
    this.dataItem = null;
  }

  public goToSample(): void {
    const request = new HttpParams()
      .set('username', this.formGroup.value.username)
      .set('password', this.formGroup.value.password)
      .set('grant_type', 'password');
  }

  private getUser(): void {
    const payload: RequestUser = {
      userName: '',
      flgAccountLock: null,
      flgAuction: null,
      page: environment.pageIndex,
      size: environment.pageSize
    };
    this.http.getUser(payload).subscribe((res) => {
      if (res && res.data) {
        this.data = res.data as DataModel;
      }
    });
  }
}
