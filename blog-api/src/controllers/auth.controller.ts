import { Request, Response } from 'express';
import {
  AuthLoginService,
  AuthRegisterService,
} from '../services/auth.service';

export async function AuthRegisterController(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await AuthRegisterService({ email, password });

  res.status(201).json({
    success: true,
    message: `User registered successfully`,
    data: user,
  });
}

export async function AuthLoginController(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await AuthLoginService({ email, password });

  res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    data: user,
  });
}
