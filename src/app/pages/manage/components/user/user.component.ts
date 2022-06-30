import { HttpParams } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Sort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { ButtonConfig, DateTimeSearch, DropListSearch, IConfigSearch, IDropList, InputSearch, ITableConfig, TextColumn } from "@common/models";
import { environment } from '@env/environment';
import { RequestUser, UserModel } from "../../models/user.model";
import { SelectColumn } from './../../../../common/models/datatable/display-column.model';
import { ManageHttpService } from './../../services/manage-http.service';

export interface PeriodicElement {
  index: number;
  id: string;
  name: string;
  representativePostCode: string;
  representativeAddress: string;
  mail: string;
  phoneNumber: string;
  basicCreditLimit: number;
  existingDebt: number;
  joinDate: string;
  customerMembership: string;
  payments?: string,
  payments1?: string,
  payments2?: string,
  payments3?: string,
  payments4?: string,
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public tableConfig: ITableConfig = {
    columnDefinition: [
      new SelectColumn('select', ' ', 2),
      new TextColumn('index', '#', 2, false, undefined, true, false, undefined, '', false, '', false),
      new TextColumn('id', 'ID', 10, false, undefined, true),
      new TextColumn('name', 'Name', 10, true, 'above', true),
      new TextColumn('representativePostCode', 'Post Code', 20, false, undefined, undefined, true),
      new TextColumn('representativeAddress', 'Address', 20, true, 'below', undefined, false, true),
      new TextColumn('mail', 'E-mail', 20),
      new TextColumn('phoneNumber', 'Phone Number', 20, true, 'below'),
      new TextColumn('basicCreditLimit', 'Credit Limit', 20, false, undefined, false, true, true, undefined, undefined, 3),
      new TextColumn('existingDebt', 'Existing Debt', 10, false, undefined, false, true, undefined, undefined, undefined, 3),
      new TextColumn('joinDate', 'Join Date', 20, false, undefined, false, true, undefined, undefined, undefined, 'DD-MMM-YYYY'),
      new TextColumn('payments', 'Payments', 20),
      new TextColumn('payments1', 'Payments1', 20),
      new TextColumn('payments2', 'Payments2', 20),
      new TextColumn('payments3', 'Payments3', 20),
      new TextColumn('payments4', 'Payments4', 10, false, undefined, false, false, true, undefined, true)
    ],
    showMore: false
  };
  public data: Array<UserModel> = [];

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

  public btnConfig: ButtonConfig = {
    btnSearchIcon: true,
    btnSearchLabel: false,
    btnExportCsv: true,
    btnAddMore: true
  };

  public isShowDetail: boolean = false;
  public dataItem: PeriodicElement | null = null;

  public isLogin = false;
  public formGroup: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: ManageHttpService
  ) {
    const userLogin = localStorage.getItem('id_token');
    if (userLogin) {
      this.isLogin = true;
      this.getUser();
    }
  }

  ngOnInit(): void {
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

  handleClick(event: PeriodicElement): void {
    // this.dataItem = event;
    // this.isShowDetail = true;
    console.log(event);
  }

  handleSort(event: Sort): void {
    console.log(event);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleGroupSearchClk(event: any): void {
    console.log(event);
  }

  handleAddNew(): void {
    this.isShowDetail = true;
    this.dataItem = null;
  }

  closeDetail(): void {
    this.isShowDetail = false;
    this.dataItem = null;
  }

  goToSample(): void {
    const request = new HttpParams()
      .set('username', this.formGroup.value.username)
      .set('password', this.formGroup.value.password)
      .set('grant_type', 'password');
    this.http.login(request).subscribe((res) => {
      if (res && res.access_token) {
        localStorage.setItem('id_token', res.access_token);
        this.isLogin = true;
        this.getUser();
      }
    });
  }

  private getUser(): void {
    const payload: RequestUser = {
      customerName: '',
      flgAccountLock: null,
      flgAuction: null,
      page: environment.pageIndex,
      size: environment.pageSize
    };
    this.http.getUser(payload).subscribe((res) => {
      if (res && res.data) {
        this.data = res.data.results as UserModel[];
      }
    });
  }
}
