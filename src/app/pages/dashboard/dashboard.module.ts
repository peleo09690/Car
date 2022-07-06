import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user/user.component';
import { CommonAppModule } from '@common/common.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonAppModule.forRoot(),
    LayoutModule
  ]
})
export class DashboardModule { }
