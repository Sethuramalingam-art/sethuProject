import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerformanceListComponent } from './components/performance-list/performance-list.component';
import { FeedBackSubmissonComponent } from './components/feed-back-submisson/feed-back-submisson.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AdminDirectionComponent } from './components/admin-direction/admin-direction.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: 'performanceList', component: PerformanceListComponent},
  { path: 'feedBackSubmisson', component: FeedBackSubmissonComponent},
  { path: 'adminDirection', component: AdminDirectionComponent},
  { path: 'employeeDetail', component: EmployeeListComponent},
  { path: 'addEmployeeDetail', component: AddNewEmployeeComponent},
  { path: 'registerDetail', component: RegisterComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRouting { }
