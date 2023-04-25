import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { ManagecrisisComponent } from './managecrisis/managecrisis.component';

const routes: Routes = [
  {path:'admin',component:AdminMainComponent, canActivate:[AuthguardGuard],
  children:[
    {path:'managecrisis',component:ManagecrisisComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
