import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { CommonAppModule } from '@common/common.module';
import { UserComponent } from './component/user/user.component';

const Components = [
  UserComponent
];

@NgModule({
  declarations: [
    SystemComponent,
    ...Components
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    CommonAppModule.forRoot()
  ]
})
export class SystemModule { }
