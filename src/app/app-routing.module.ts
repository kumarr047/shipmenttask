import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'dashboard',
   
    loadChildren: () => import('./dashboard/dashboard.module').
      then(m => m.DashboardModule)
  },
  {
    path: 'shipments',
   
    loadChildren: () => import('./shipments/shipments.module').
      then(m => m.ShipmentsModule)
  },
  {
    path: 'shipmentsdetails',
   
    loadChildren: () => import('./shipments-details/shipments-details.module').
      then(m => m.ShipmentsDetailsModule)
  },
  {
    path: 'bookings',
   
    loadChildren: () => import('./bookings/bookings.module').
      then(m => m.BookingsModule)
  },
  {
    path: 'quotations',
   
    loadChildren: () => import('./quotations/quotations.module').
      then(m => m.QuotationsModule)
  },
  {
    path: 'invoice',
   
    loadChildren: () => import('./invoice/invoice.module').
      then(m => m.InvoiceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
