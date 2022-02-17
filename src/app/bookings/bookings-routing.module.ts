import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';

const routes: Routes = [
  {
  path:'bookinglist',component:BookinglistComponent
  },
  {
    path:'bookingdetails',component:BookingdetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
