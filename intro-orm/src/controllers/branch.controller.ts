import { Request, Response } from 'express';
import { CreateBranchService, GetAllBranchService } from '../services/branch.service';

export async function CreateBranchController(req: Request, res: Response) {
  try {
    const { name, phoneNumber, address } = req?.body;

    const branch = await CreateBranchService({ name, phoneNumber, address });

    res.status(201).json({
      success: true,
      message: 'Branch created successfully',
      data: branch,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false, 
      message: error?.message, 
      data: {}
    })
  }
}

export async function GetAllBranchController(req: Request, res: Response){
  try {
    const branches = await GetAllBranchService();

    res.status(200).json({
      success: true, 
      message: 'Branches fetched successfully', 
      data: branches
    })
  } catch (error: any) {
     res.status(500).json({
      success: false, 
      message: error?.message, 
      data: {}
    })
  }
}