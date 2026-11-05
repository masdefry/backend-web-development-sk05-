import { Router } from 'express';
import { AuthRegisterController } from '../controllers/auth.controller';

export const AuthRoute = Router(); 

AuthRoute.post('/register', AuthRegisterController); 