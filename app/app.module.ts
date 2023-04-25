import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisCenterModule } from './crisis/crisis-center.module';
import { HeroesModule } from './heroes/heroes.module';
import { AdminModule } from './admin/admin.module';
import { AuthguardGuard } from './authguard.guard';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrisisCenterModule,
    FormsModule,
    HeroesModule,
    AdminModule,
    LoginModule
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
