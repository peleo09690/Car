import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonAppModule } from '../common/common.module';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    CommonAppModule.forRoot()
  ]
})
export class PagesModule { }
