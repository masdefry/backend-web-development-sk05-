import express, { NextFunction, Request, Response } from 'express';
import { AuthRoute } from './routes/auth.route';

const PORT: number = 8000;
const API_PREFIX: string = '/api/v1';
const app = express();

app.use(express.json());
app.use(`${API_PREFIX}/auth`, AuthRoute);

/*
  Centralized Error Middleware
*/
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: true,
    message: error?.message,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
