import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopService } from './shop.service';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { AuthguardServiceService } from './authguard-service.service'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ShopListComponent,
    ShopDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
    ,CommonModule,HttpModule
  ],
  providers: [UserService,LoginService,ShopService,AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
