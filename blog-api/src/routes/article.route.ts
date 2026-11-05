import { Router } from 'express';
import { CreateArticleController } from '../controllers/article.controller';

export const ArticleRoute = Router(); 

ArticleRoute.post('/', CreateArticleController); 