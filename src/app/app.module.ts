import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
