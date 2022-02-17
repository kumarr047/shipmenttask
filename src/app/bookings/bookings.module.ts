import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { ShipmentsDetailsModule } from '../shipments-details/shipments-details.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookinglistComponent,
    BookingdetailsComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    ShipmentsDetailsModule,
    MatTableModule,
    MatIconModule,
    MatProgressBarModule,
    MatStepperModule,
    MatTabsModule,
    SharedModule
  ]
})
export class BookingsModule { }
