import { Router } from 'express';
import { CreateEmployeeController, GetAllEmployeeController, UpdateEmployeeController } from '../controllers/employees.controller';

export const EmployeeRoute = Router(); 

EmployeeRoute.post('/', CreateEmployeeController); 
EmployeeRoute.get('/', GetAllEmployeeController); 
EmployeeRoute.put('/:id', UpdateEmployeeController); 