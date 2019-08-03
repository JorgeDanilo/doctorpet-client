import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeSearchComponent } from './pages/employee/employee-search/employee-search.component';
import { EmployeeNewComponent } from './pages/employee/employee-new/employee-new.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'employee/search', component: EmployeeSearchComponent},
  {path: 'employee/new', component: EmployeeNewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
