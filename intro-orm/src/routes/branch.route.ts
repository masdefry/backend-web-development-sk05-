import { Router } from 'express';
import { CreateBranchController, GetAllBranchController } from '../controllers/branch.controller';

export const BranchRoute = Router();

BranchRoute.post('/', CreateBranchController); 
BranchRoute.get('/', GetAllBranchController); 