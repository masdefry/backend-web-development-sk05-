import { prisma } from '../connection/prisma.connection';
import { BranchCreateInput } from '../generated/prisma/models';

export async function CreateBranchService({
  name,
  phoneNumber,
  address,
}: BranchCreateInput) {
    return await prisma.branch.create({
        data: {
            name, 
            phoneNumber, 
            address
        }
    }); 
}

export async function GetAllBranchService(){
    return await prisma.branch.findMany({
        select: {
            id: true, 
            name: true, 
            address: true, 
            phoneNumber: true
        }
    })
}