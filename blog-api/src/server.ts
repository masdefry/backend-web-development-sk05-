import express from 'express';
import { AuthRoute } from './routes/auth.route';
import { ErrorMiddleware } from './middlewares/error.middleware';
import { ArticleRoute } from './routes/article.route';
import cors from 'cors'; 

const PORT: number = 8000;
const API_PREFIX: string = '/api/v1';
const app = express();

app.use(express.json());
app.use(cors())
app.use(`${API_PREFIX}/auth`, AuthRoute);
app.use(`${API_PREFIX}/articles`, ArticleRoute); 

/*
  Centralized Error Middleware
*/
app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
