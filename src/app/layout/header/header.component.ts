import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuData } from '../side-nav/menu.config';
import { environment } from '@env/environment';

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
  dataMenu = MenuData;
  isShow:boolean = false;
  titelHeader: string = '';
  data: DataHeader = {
    parent: '',
    chilren: ''
  };
  constructor(
    private router: Router
  ) {
    this.seachDataMenu(this.router.url);
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.router.events.subscribe((x: any) => {
      this.seachDataMenu(x?.url);
    });
    this.titelHeader = environment.header;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  seachDataMenu(url: string): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let a: any;
    a = this.dataMenu.filter(x => x.children.filter(i => i.route === url).length > 0);
    this.data.parent = a[0]?.name;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.data.chilren = a[0]?.children.filter((i: any) => i.route === url)[0].name;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  mouseoverDropdown() {
    this.isShow = !this.isShow;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  mouseoutDropdown() {
    this.isShow = !this.isShow;
  }
}
