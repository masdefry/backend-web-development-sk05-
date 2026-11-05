import express from 'express';
import { AuthRoute } from './routes/auth.route';

const PORT: number = 8000;
const API_PREFIX: string = '/api/v1';
const app = express();

app.use(express.json());
app.use(`${API_PREFIX}/auth`, AuthRoute); 

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
