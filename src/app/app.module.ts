import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardEmployeeComponent } from './components/card-employee/card-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    NotFoundComponent,
    CardEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
