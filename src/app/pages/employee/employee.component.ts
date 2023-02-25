import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { employee } from 'src/app/models/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { switchMap } from 'rxjs/operators'
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  imgAfter30 = "https://images.unsplash.com/photo-1552641156-93ea2a5f78e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by."
  imgBefore30 = "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG9"

  employee: employee | null = null
  loading: boolean = false
  error: string | null = null

  constructor(
    private employeeService: EmployeeServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.route.paramMap.pipe(
      switchMap(params => {
        let productId
        productId = params.get('id')
        if (productId) {
          return this.employeeService.getEmployee(productId)
        }
        return []
      })
    ).subscribe(user => {
      this.employee = user.data
      this.loading = false
    }, (error: { error: { message: string } }) => {
      this.error = error.error.message
      this.loading = false
    })
  }

  back() {
    this.location.back()
  }
}
