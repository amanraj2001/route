import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';


@NgModule({
  declarations: [
    CrisisHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
    FormsModule
  ]
})
export class CrisisCenterModule { }
