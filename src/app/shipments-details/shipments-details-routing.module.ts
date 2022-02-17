import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentshomeComponent } from './shipmentshome/shipmentshome.component';

const routes: Routes = [
  {
    path:'details',component:ShipmentshomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentsDetailsRoutingModule { }
