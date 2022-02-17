import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationsRoutingModule } from './quotations-routing.module';
import { QuotationdetailsComponent } from './quotationdetails/quotationdetails.component';


@NgModule({
  declarations: [
    QuotationdetailsComponent
  ],
  imports: [
    CommonModule,
    QuotationsRoutingModule
  ]
})
export class QuotationsModule { }
