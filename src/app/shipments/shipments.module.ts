import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShipmentComponent
  ],
  imports: [
    CommonModule,
    ShipmentsRoutingModule,
    SharedModule,
  
  ]
})
export class ShipmentsModule { }
