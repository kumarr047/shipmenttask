import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CommonComponent } from './common/common.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDialogModule} from '@angular/material/dialog';
import { TableComponent } from './table/table.component';
import { SteppercommonComponent } from './steppercommon/steppercommon.component';


@NgModule({
  declarations: [
    CommonComponent,
    TableComponent,
    SteppercommonComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatProgressBarModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDialogModule
   
  ],
  exports:[
    CommonComponent,
    TableComponent,
    SteppercommonComponent
  ]
})
export class SharedModule { }
