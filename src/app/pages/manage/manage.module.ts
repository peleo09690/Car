import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonAppModule } from './../../common/common.module';
import { AddEditUserComponent, UserComponent } from './components';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ManageHttpService } from './services/manage-http.service';



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
  ],
  providers: [
    ManageHttpService
  ]
})
export class ManageModule { }
