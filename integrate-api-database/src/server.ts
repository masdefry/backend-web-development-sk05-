import express from 'express';
import { EmployeeRoute } from './routes/employees.route';
import pool from './connection/pool.connection';

const PORT: number = 8000;

const app = express();

app.use(express.json());

const API_PREFIX = '/api/v1'
app.use(`${API_PREFIX}/employees`, EmployeeRoute);

pool.connect((err, client, release) => {
  if (err) return console.log(`Error acquiring client ${err.stack}`);

  console.log('Connection successful');

  release();
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});