import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { FormsModule } from "@angular/forms"
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OrderManagementComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
