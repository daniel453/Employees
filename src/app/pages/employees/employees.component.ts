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
  error: boolean = false
  loading: boolean = false

  constructor(
    private employeesService: EmployeeServiceService
  ) {

  }

  ngOnInit(): void {
    this.loading = true
    this.employeesService.getAllEmployees()
      .subscribe((users) => {
        this.employees = users.data
        this.loading = false
      }, () => {
        this.error = true
        this.loading = false
      })
  }
}
