import { Component, Input } from '@angular/core';
import { employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-card-employee',
  templateUrl: './card-employee.component.html',
  styleUrls: ['./card-employee.component.css']
})
export class CardEmployeeComponent {
  @Input() employee: employee | null = null
  imgAfter30 = "https://images.unsplash.com/photo-1552641156-93ea2a5f78e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by."
  imgBefore30 = "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG9"

}
