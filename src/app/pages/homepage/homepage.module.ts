import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonAppModule } from '@common/common.module';
import { Components } from './Components';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { LayoutModule } from '@layout/layout.module';

@NgModule({
  declarations: [
    HomepageComponent,
    ...Components
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CommonAppModule.forRoot(),
    LayoutModule
  ]
})
export class HomepageModule { }
