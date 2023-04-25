import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';


@NgModule({
  declarations: [
    HeroDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule

  ]
})
export class HeroesModule { }
