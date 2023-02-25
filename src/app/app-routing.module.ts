import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeesComponent } from './pages/employees/employees.component'
import { EmployeeComponent } from './pages/employee/employee.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees'
  },
  {
    path: 'employees',
    children: [
      {
        path: '',
        component: EmployeesComponent
      },
      {
        path: ':id',
        component: EmployeeComponent,
      }
    ]
  },
  {
    path: '**',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
