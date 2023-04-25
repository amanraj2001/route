import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterModule } from './crisis-center.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';

const routes: Routes = [
  {path:'',component:CrisisHomeComponent,
  children:[
    {path:'detail/:id',component:CrisisDetailComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
