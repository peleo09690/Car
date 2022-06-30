import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AngularMaterialModule } from '@common/angular-material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EditUserComponent
  ]
})
export class LayoutModule { }
