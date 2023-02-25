import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: employee[] = []
  error: string | null = null
  loading: boolean = false

  constructor(
    private employeesService: EmployeeServiceService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.employeesService.getAllEmployees()
      .subscribe((users) => {
        this.employees = users.data
        this.loading = false
      }, (error: { error: { message: string } }) => {
        this.error = error.error.message
        this.loading = false
      })
  }
}
