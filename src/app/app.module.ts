import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Componets/employee/employee.component';
import { HeaderComponent } from './Componets/header/header.component';
import { AddEmployeeComponent } from './Componets/add-employee/add-employee.component';
import { RegisterComponent } from './Componets/register/register.component';
import { LoginComponent } from './Componets/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UpdateEmployeeComponent } from './Componets/update-employee/update-employee.component';
import { FilterPipe } from './Pipes/filter.pipe'
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './Componets/loader/loader.component';
import { LoadingInterceptor } from './loader-interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    AddEmployeeComponent,
    RegisterComponent,
    LoginComponent,
    UpdateEmployeeComponent,
    FilterPipe,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
