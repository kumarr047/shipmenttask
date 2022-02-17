import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { DashboardcommonComponent } from './dashboardcommon/dashboardcommon.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { DashboardactivebookingsComponent } from './dashboardactivebookings/dashboardactivebookings.component';
import { DashboardactivequotesComponent } from './dashboardactivequotes/dashboardactivequotes.component';
import { DashboardactiveoutinvoicesComponent } from './dashboardactiveoutinvoices/dashboardactiveoutinvoices.component';


@NgModule({
  declarations: [
    DashboardhomeComponent,
    DashboardcommonComponent,
    DashboardactivebookingsComponent,
    DashboardactivequotesComponent,
    DashboardactiveoutinvoicesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressBarModule,
    MatStepperModule,
    MatIconModule
  ]
})
export class DashboardModule { }
