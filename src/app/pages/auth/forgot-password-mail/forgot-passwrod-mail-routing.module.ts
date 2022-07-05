import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordMailComponent } from './forgot-password-mail.component';

const routes: Routes = [
  {
    path:'',
    component: ForgotPasswordMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPasswrodMailRoutingModule { }
