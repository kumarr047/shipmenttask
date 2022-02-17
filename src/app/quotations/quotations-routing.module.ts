import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationdetailsComponent } from './quotationdetails/quotationdetails.component';

const routes: Routes = [
  {
    path:'quotationdetails',
    component:QuotationdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationsRoutingModule { }
