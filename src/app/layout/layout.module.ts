import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@common/angular-material.module';
import { AuthModule } from './../auth/auth.module';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonAppModule } from '@common/common.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderService } from './services';
import { ChangePasswordComponent } from './components/header/change-password/change-password.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EditUserComponent,
    SideNavComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonAppModule.forRoot(),
    AuthModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EditUserComponent,
    SideNavComponent,
    NzLayoutModule,
    FormsModule
  ],
  providers: [
    HeaderService
  ]
})
export class LayoutModule { }
