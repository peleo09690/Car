/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@common/components/datatable/datatable.component';
import { ActionSearchModel, ButtonActionModel, ButtonConfig } from '@common/models';
import { DialogConfirmService } from '@common/services/dialog-confirm.service';
import { DataSearchModel } from '@core/models';
import { LanguageService } from '@core/services';
import { environment } from '@env/environment';
import { ToastrService } from 'ngx-toastr';
import { CloseEventEditModel, HttpClienGetUserByIdResponse, HttpClienGetUserResponse, RequestParamUserSeach, SortDataTableEventModel, UserModel, UserResponse } from '../../models';
import { TABLE_USER_CONFIG, USER_SEARCH_CONFIG } from './user.config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public btnSearchConfig = new ButtonConfig(true, true);
  public tableSearchConfig = USER_SEARCH_CONFIG;
  public isToggleEdit: boolean = false;
  public tableUserConfig = TABLE_USER_CONFIG;
  public dataSource = new DataSearchModel();
  public rowPicked: UserModel | undefined;
  public page: number = environment.pageIndex;
  public size: number = environment.pageSize;
  public keySeach: string = '';
  public requestParam: RequestParamUserSeach = {
    page: environment.pageIndex,
    size: environment.pageSize,
    keyWord: ''
  };
  public constructor(
  ) { }

  public ngOnInit(): void {
    let a=  0;
  }
}
