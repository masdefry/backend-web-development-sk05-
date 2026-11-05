import { Request, Response } from 'express';
import { AuthRegisterService } from '../services/auth.service';

export async function AuthRegisterController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await AuthRegisterService({ email, password });

    res.status(201).json({
      success: true,
      message: `User registered successfully`,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      data: null,
    });
  }
}

export async function AuthLoginController(req: Request, res: Response){}
