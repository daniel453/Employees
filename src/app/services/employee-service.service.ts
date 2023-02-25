import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../models/employee.model';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  API = "https://dummy.restapiexample.com/api/v1";

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployees() {
    return this.http.get<{ data: employee[] }>(`${this.API}/employees`)
  }

  getEmployee(id: number | string) {
    return this.http.get<{ data: employee }>(`${this.API}/employee/${id}`)
  }
}
