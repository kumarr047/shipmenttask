import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentsDetailsRoutingModule } from './shipments-details-routing.module';
import { UpdatesComponent } from './updates/updates.component';
import { DetailsComponent, DialogElementsExampleDialog } from './details/details.component';
import { DocumentsComponent } from './documents/documents.component';
import { ShipmentshomeComponent } from './shipmentshome/shipmentshome.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    UpdatesComponent,
    DetailsComponent,
    DocumentsComponent,
    ShipmentshomeComponent,
   
    DialogElementsExampleDialog
  ],
  imports: [
    CommonModule,
    ShipmentsDetailsRoutingModule,
    MatGridListModule,
    MatStepperModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    SharedModule
  ],exports:[
    UpdatesComponent,
    DetailsComponent,
    DocumentsComponent,
    ShipmentshomeComponent
  ]
})
export class ShipmentsDetailsModule { }
