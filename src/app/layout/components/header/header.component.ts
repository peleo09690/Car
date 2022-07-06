import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '@auth/services/login.service';
import { UserModelResponse } from '../../models/user.model';
import { HeaderService } from '../../services';
import { MenuData } from '../side-nav/menu.config';
import { ChangePasswordComponent } from './change-password/change-password.component';

export interface DataHeader {
  parent: string;
  chilren: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public dataMenu = MenuData;
  public titelHeader: string = '';
  public userName: string = '';

  public constructor(
    private loginService: LoginService,
    private headerService: HeaderService,
    public dialog: MatDialog
  ) {
  }
  public ngOnInit(): void {
    this.loginService.isLoginAsync$.subscribe((value) => {
      if (value) {
        this.headerService.getCurrentUser().subscribe((res: UserModelResponse) => {
          if (res) {
            this.userName = res.data.userName;
            sessionStorage.setItem('current_user', JSON.stringify(res.data));
          }
        });
      }
    });
  }
  public btnLogOut(): void { }
  public changePassword():void{
    let dialog = this.dialog.open(ChangePasswordComponent, {
      width:"520px"
    });
  }
}
