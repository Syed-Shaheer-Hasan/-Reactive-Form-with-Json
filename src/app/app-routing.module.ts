import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : '', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'employee',component:EmployeeManagementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
