import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails.component';

const routes: Routes = [
  {
    path:'invoicedetails',
    component:InvoicedetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
