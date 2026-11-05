import { prisma } from '../connection/prisma.connection';

interface ArticleCreateInput {
  title: string;
  imageUrl: string;
  description: string;
  authorId: string;
}

export async function CreateArticleService({
  title,
  imageUrl,
  description,
  authorId,
}: ArticleCreateInput) {
  const findAuthorId = await prisma.user.findUnique({
    where: {
      id: authorId,
    },
  });

  if(!findAuthorId) throw new Error('Author ID is invalid'); 

  return await prisma.article.create({
    data: {
      title,
      imageUrl,
      description,
      authorId,
    },
  });
}
