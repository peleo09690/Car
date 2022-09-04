import { CommonService } from './../../services/common.service';
import { LoginService } from '@auth/services/login.service';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MENU_DATA, MENU_DATA_SYSTEM } from '@core/config';
import { ISideMenuNode } from '@layout/models/menu.model';
import { UserDetailModel, UserModelResponse } from '@layout/models/user.model';
import { DialogConfirmService } from '@common/services/dialog-confirm.service';
import { Router } from '@angular/router';
import { RolesModel } from '@common/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit,AfterViewChecked {
  public users: Array<ISideMenuNode> = [{
    id: '8',
    icon: 'icon-user',
    category: 'user-settings',
    name: 'common.menu.user-settings.name',
    order: 2,
    level: 1,
    children: [
      {
        id: '801',
        level: 2,
        icon: 'icon-key',
        category: 'user-settings',
        name: 'common.menu.user-settings.change-password',
        order: 1,
        children: []
      },
      {
        id: '802',
        level: 2,
        icon: 'icon-logout',
        category: 'user-settings',
        name: 'common.menu.user-settings.logout',
        order: 2,
        children: []
      }
    ]
  }];

  public userLogin: UserDetailModel = {
    userId: 0,
    userName: '',
    mail: '',
    phonePhone: '',
    delFlg: '',
    lockUser: null,
    roles: [{ role: RolesModel.SYSTEM }],
    companyId: 0,
    createBy: null
  };;
  public click = false;
  public dataMenu = MENU_DATA_SYSTEM;
  public constructor(
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog,
    private loginService: LoginService,
    private commonService: CommonService,
    private messageDialog: DialogConfirmService,
    private router: Router
  ) { }

    public ngOnInit(): void {
      let userLogin = JSON.parse(localStorage.getItem('user_login') || '{}');

      this.userLogin = userLogin as UserDetailModel;

      if (userLogin && userLogin.roles[0].role === RolesModel.SYSTEM) {
        this.dataMenu = MENU_DATA_SYSTEM;
      }

    }

  public ngAfterViewChecked(): void {
    this.cdr.detectChanges();

  }

  public onClickMenuClick(item: ISideMenuNode): void {
    if (item.name.includes('change-password')) {
      const dialog = this.matDialog.open(ChangePasswordComponent, {
        width: '520px'
      });

      dialog.afterClosed().subscribe((res) => {
        if (res) {
          this.messageDialog.customMessage('success', res);
        }
      });
    } else {
      sessionStorage.clear();
      this.commonService.logout();
      localStorage.removeItem('id_token');
      this.loginService.isLoginAsync$.next(false);
      this.router.navigate(['auth/login']);
    }
  }

  public otherService(): void {
    this.loginService.isLoginAsync$.subscribe((value) => {
      if (value) {
        this.commonService.getCurrentUser().subscribe((res: UserModelResponse) => {
          if (res) {
            sessionStorage.setItem('current_user', JSON.stringify(res.data));
          }
        });
      }
    });
  }
}
