import express, { Request, Response } from 'express';

const PORT: number = 8000;

const app = express();

// BODY PARSER
app.use(express.json());
/*
  Cara melakukan request data melalui HTTP Methods:
  1. Body
  2. URL  : Params & Query
  3. Headers

  GET     : Mengambil data -> URL & Headers

  POST    : Submitting data -> Body, URL & Headers

  PUT     : Update Data (Keseluruhan)       -> Body, URL & Headers

  PATCH   : Update Data (Beberapa Data Saja)-> Body, URL & Headers

  DELETE  : Delete Data    -> URL & Headers
*/

app.get('/:bebas', (req: Request, res: Response) => {
  const params = req.params;
  console.log(params?.bebas);
  const queries = req.query;
  console.log(queries);
  console.log(queries?.page);
  console.log(queries?.limit);
  res.status(200).json({ message: 'Intro Express API 2026' });
});

app.post('/api/v1', (req: Request, res: Response) => {
  const data = req?.body;
  console.log(data);
  console.log(data.fullName);
  console.log(data.age);
  console.log(data.isGraduated);
  res.status(200).json({ message: 'Welcome to My API' });
});

app.put('/api/v1/products/:productId', (req: Request, res: Response) => {
  const parameters = req?.params;
  const data = req?.body;

  if (!data?.name)
    return res.status(400).json({
      success: false,
      message: 'Product name is required',
      data: {},
    });

  if (!data?.stock) // Boolean(0) -> false
    return res.status(400).json({
      success: false,
      message: 'Product stock is required',
      data: {},
    });

  res.status(200).json({
    success: true,
    message: `Product with id = ${parameters?.productId} updated successfully`,
    data: data,
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

// Product -> /products
// Transaction -> /transactions
