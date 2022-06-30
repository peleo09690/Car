import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AngularMaterialModule } from '@common/angular-material.module';
import { SideNavComponent } from './side-nav/side-nav.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EditUserComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EditUserComponent,
    SideNavComponent,
    NzLayoutModule,
    FormsModule
  ]
})
export class LayoutModule { }
