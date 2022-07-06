import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
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
  public data: DataHeader = {
    parent: '',
    chilren: ''
  };
  public constructor(
    private headerService: HeaderService
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
}
