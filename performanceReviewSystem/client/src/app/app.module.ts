import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatRadioModule, MatTableModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { PerformanceListComponent } from './components/performance-list/performance-list.component';
import { FeedBackSubmissonComponent } from './components/feed-back-submisson/feed-back-submisson.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AdminDirectionComponent } from './components/admin-direction/admin-direction.component';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PerformanceListComponent,
    FeedBackSubmissonComponent,
    EmployeeListComponent,
    AdminDirectionComponent,
    AddNewEmployeeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatTableModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
