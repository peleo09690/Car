import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonAppModule } from './../../common/common.module';
import { AddEditUserComponent, UserComponent } from './components';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';



@NgModule({
  declarations: [
    ManageComponent,
    UserComponent,
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,

    CommonAppModule.forRoot()
  ]
})
export class ManageModule { }
