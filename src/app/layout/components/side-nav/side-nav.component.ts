import { Component } from '@angular/core';
import { MenuData } from './menu.config';

export interface SubMenu {
  icon: string;
  name: string;
  url: string;
}
export interface ListMenu {
  icon: string;
  name: string;
  subMenu: Array<SubMenu>;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  public click = false;
  public dataMenu = MenuData;
  public listSubmenu = [];
  public constructor() { }
}
