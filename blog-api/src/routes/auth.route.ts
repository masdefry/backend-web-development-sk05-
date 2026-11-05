import { Router } from 'express';
import { AuthLoginController, AuthRegisterController } from '../controllers/auth.controller';

export const AuthRoute = Router(); 

AuthRoute.post('/register', AuthRegisterController); 
AuthRoute.post('/login', AuthLoginController); 