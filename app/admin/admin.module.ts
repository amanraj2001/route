import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagecrisisComponent } from './managecrisis/managecrisis.component';


@NgModule({
  declarations: [
    AdminMainComponent,
    DashboardComponent,
    ManagecrisisComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
