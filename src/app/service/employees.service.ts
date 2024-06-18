import { Injectable } from '@angular/core';
import { Employee } from '../model-view/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employees: Employee[] = [
    {
      id: 10001,
      birtDate:  new Date('1953-09-02'),
      firstName: 'Georgi',
      lastName: 'Facello',
      gender: 'M',
      hireDate: new Date('1986-06-26')   
    },
    {
      id: 10002,
      birtDate:  new Date('1964-06-02'),
      firstName: 'Bezalel',
      lastName: 'Simmel',
      gender: 'F',
      hireDate: new Date('1985-11-21')   
    }
  ]  

  constructor() { }

  getAllEmployees () {
    return this.employees;
  }
}
