import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesModel } from '@common/models';
import { RoleGuard } from '@core/guards/role.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  }
  ,
  {
    path: 'system',
    // canActivate: [AuthGuard,RoleGuard],
    // data: {
    //   roles: [RolesModel.SYSTEM]
    // },
    loadChildren: () => import('./pages/system/system.module').then((m) => m.SystemModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
