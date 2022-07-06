import { Component, OnInit } from '@angular/core';
import { LoginService } from '@auth/services/login.service';
import { UserModelResponse } from '@layout/models/user.model';
import { HeaderService } from '../../services';
import { MenuData } from '../side-nav/menu.config';

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


  public constructor(
    private loginService: LoginService,
    private headerService: HeaderService
  ) {
  }
  public ngOnInit(): void {
    this.loginService.isLoginAsync$.subscribe((value) => {
      if (value) {
        this.headerService.getCurrentUser().subscribe((res: UserModelResponse) => {
          if (res) {
            sessionStorage.setItem('current_user', JSON.stringify(res.data));
          }
        });
      }
    });
  }
  public btnLogOut(): void { }
}
