import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
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
  public data: DataHeader = {
    parent: '',
    chilren: ''
  };
  public constructor(
    private headerService: HeaderService,
    public dialog: MatDialog
  ) {
  }
  public ngOnInit(): void {
    this.headerService.getCurrentUser();
  }
  public btnLogOut(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // this.headerService.logOut().subscribe((x: any) => {
    //   localStorage.removeItem('id_token');
    //   localStorage.removeItem('user');
    //   this.router.navigateByUrl('login');
    // });
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public changePassword():void{
    let dialog = this.dialog.open(ChangePasswordComponent, {
      width:"520px"
    });
  }
}
