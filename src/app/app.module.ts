import { LoginComponent } from './login/login.component';

import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreComponent } from './store/store.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexModule } from '@angular/flex-layout/flex';
import { GridModule } from '@angular/flex-layout/grid';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import { UsersComponent } from './users/users.component';
import { UserCartComponent } from './user-cart/user-cart.component';






@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    UsersComponent,
    LoginComponent,
    UserCartComponent,

  



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    GridModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

