import { Router } from 'express';
import { CreateEmployeeController } from '../controllers/employees.controller';

export const EmployeeRoute = Router(); 

EmployeeRoute.post('/', CreateEmployeeController); 