import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MENU_DATA } from '@core/config';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { Router } from '@angular/router';

export interface DataHeader {
  parent: string;
  chilren: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public dataMenu = MENU_DATA;
  public titelHeader: string = '';
  public userName: string = '';
  public iconLogomenu: string  = 'logo';
  public listMenu: Array<string> = ['Bảng giá Ô tô', 'Show room', 'Thị trường Ô tô','Tính giá xe','So sánh xe'];
  public checkLogin = false;
  public activeMenu = 99;
  public checkDisplay: boolean = true;
  public constructor(
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  public btnLogOut(): void { }
  public changePassword(): void {
    let dialog = this.dialog.open(ChangePasswordComponent, {
      width: '520px'
    });
  }
  public displayLogin() {
    this.checkLogin = !this.checkLogin;
  }
  public returnHomePage() {
    this.activeMenuIdx(99);
    this.router.navigate(['home']);
  }

  public activeMenuIdx(idx: number): void {
    if (this.activeMenu === idx) {
      this.activeMenu = 99;
    } else {
      this.activeMenu = idx;
    }
    this.checkLogin = false;
    this.checkDisplay = false;
    switch (idx) {
      case 0:
        this.router.navigate(['vehicle-price']);
        break;
      case 1:
        this.router.navigate(['show-room']);
        break;
      case 2:
        this.router.navigate(['information']);
        break;
      case 3:
        this.router.navigate(['installment-price']);
        break;
      case 4:
        this.router.navigate(['compare-vehicle']);
        break;        
      default:
        break;
    }
  }
}
