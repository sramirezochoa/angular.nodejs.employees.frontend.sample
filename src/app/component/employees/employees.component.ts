import { Component } from '@angular/core';
import { Employee } from '../../model-view/employee.interface';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../service/employees.service';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  employees: Employee[] = []


  constructor(private employeesService:EmployeesService) { 
    this.employees = this.employeesService.getAllEmployees();
  }
  


}
