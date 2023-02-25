import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EmployeesComponent } from './pages/employees/employees.component'
import { EmployeeComponent } from './pages/employee/employee.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
      {
        path: 'employees/:id',
        component: EmployeeComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
