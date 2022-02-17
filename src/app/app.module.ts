import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogExample, HeaderComponent } from './header/header.component';

import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from './shared/shared.module';
import { ShipmentsModule } from './shipments/shipments.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {MatDialogModule} from '@angular/material/dialog';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { BookingsModule } from './bookings/bookings.module';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardModule } from './dashboard/dashboard.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogExample,
   
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    MatIconModule,
    SharedModule,
    ShipmentsModule,
    MatProgressBarModule,
    MatStepperModule,
    InputsModule,
    MatDialogModule,
  
    MatPaginatorModule,
    MatGridListModule,
    MatSelectModule,
    BookingsModule,
    
    MatCheckboxModule,
    DashboardModule,
    InvoiceModule,
    MaterialModule
    
  ],
  exports:[
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
