import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswrodMailRoutingModule } from './forgot-passwrod-mail-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { ForgotPasswordMailComponent } from './forgot-password-mail.component';


@NgModule({
  declarations: [ForgotPasswordMailComponent],
  imports: [
    CommonModule,
    ForgotPasswrodMailRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class ForgotPasswrodMailModule { }
