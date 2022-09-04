import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesModel } from '@common/models';
import { AuthGuard, RoleGuard } from '@core/guards';
import { UserComponent } from './component/user/user.component';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      {
        path: 'user', component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
