import { Request, Response } from 'express';
import {
  CreateEmployeeService,
  GetAllEmployeeService,
  UpdateEmployeeService,
} from '../services/employees.service';

export async function CreateEmployeeController(req: Request, res: Response) {
  try {
    const { firstname, lastname, salary, hiredate, department } = req.body;

    await CreateEmployeeService({
      firstname,
      lastname,
      salary,
      hiredate,
      department,
    });

    res.status(201).json({
      success: true,
      message: 'Employee created successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
}

export async function GetAllEmployeeController(req: Request, res: Response) {
  try {
    const employees = await GetAllEmployeeService();

    res.status(200).json({
      success: true,
      message: 'Employees retrieved successfully',
      data: employees,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
}

export async function UpdateEmployeeController(req: Request, res: Response) {
  try {
    const { firstname, lastname, salary, hiredate, department } = req.body;
    const { id } = req.params;
    await UpdateEmployeeService({
      firstname,
      lastname,
      salary,
      hiredate,
      department,
      id: parseInt(id as string),
    });

    res.status(200).json({
      success: true,
      message: `Employee with id = ${id} updated successfully`,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
}
