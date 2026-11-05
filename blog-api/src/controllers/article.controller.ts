import { Request, Response } from 'express';
import { CreateArticleService } from '../services/article.service';

export async function CreateArticleController(req: Request, res: Response) {
  const { title, imageUrl, description, authorId } = req.body;

  const article = await CreateArticleService({
    title,
    imageUrl,
    description,
    authorId,
  });

  res.status(201).json({
    success: true,
    message: 'Article created successfully',
    data: article,
  });
}
