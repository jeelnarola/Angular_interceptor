import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Componets/employee/employee.component';
import { AddEmployeeComponent } from './Componets/add-employee/add-employee.component';
import { RegisterComponent } from './Componets/register/register.component';
import { LoginComponent } from './Componets/login/login.component';
import { HeaderComponent } from './Componets/header/header.component';
import { authGuard } from './guard/auth.guard';
import { UpdateEmployeeComponent } from './Componets/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '',
    canActivate:[authGuard],
    component: HeaderComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'addemployee',
    component: AddEmployeeComponent,

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'update/:id',
    component:UpdateEmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
