import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesModel } from '@common/models';
import { AuthGuard, RoleGuard } from '@core/guards';
import { HomepageComponent } from './homepage.component';
import { ShowRoomComponent } from './show-room/show-room.component';
import { InformationComponent } from './information/information.component';
import { InstallmentPriceComponent } from './installment-price/installment-price.component';
import { VehiclePriceComponent } from './vehicle-price/vehicle-price.component';
import { HomepageMainComponent } from './homepage-main/homepage-main.component';
import { CompareVehicleComponent } from './compare-vehicle/compare-vehicle.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home', component: HomepageMainComponent
      },
      {
        path: 'show-room', component: ShowRoomComponent
      },
      {
        path: 'information', component: InformationComponent
      },
      {
        path: 'installment-price', component: InstallmentPriceComponent
      },
      {
        path: 'vehicle-price', component: VehiclePriceComponent
      },
      {
        path: 'compare-vehicle', component: CompareVehicleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
