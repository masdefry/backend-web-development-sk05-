import express from 'express';
import { BranchRoute } from './routes/branch.route';

const PORT: number = 8000;
const app = express();

app.use(express.json());
app.use('/api/v1/branches', BranchRoute); 
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

