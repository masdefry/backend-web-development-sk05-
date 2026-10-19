import { Router } from 'express';
import { CreateEmployeeController, GetAllEmployeeController } from '../controllers/employees.controller';

export const EmployeeRoute = Router(); 

EmployeeRoute.post('/', CreateEmployeeController); 
EmployeeRoute.get('/', GetAllEmployeeController); 