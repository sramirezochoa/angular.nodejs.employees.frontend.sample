import { Routes } from '@angular/router';
import { EmployeesComponent } from './component/employees/employees.component';
import { DepartmentsComponent } from './component/departments/departments.component';
import { SalariesComponent } from './component/salaries/salaries.component';

export const routes: Routes = [

    {
        path: '',
        component: EmployeesComponent,
        title: 'Employees'
    },
    {
        path: 'employees',
        component: EmployeesComponent,
        title: 'Employees'
    },  
    {
        path: 'departments',
        component: DepartmentsComponent,
        title: 'Employees'
    },  
    {
        path: 'salaries',
        component: SalariesComponent,
        title: 'Employees'
    }        

];
