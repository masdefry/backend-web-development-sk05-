import express from 'express';

const PORT: number = 8000;
const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

