import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAgryComponent } from './admin-agry/admin-agry.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListModalComponent } from './list-modal/list-modal.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAgryComponent,
    AdminComponent,
    LoginComponent,
    NavBarComponent,
    ListModalComponent,
    DetailModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
