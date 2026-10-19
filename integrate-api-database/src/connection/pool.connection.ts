import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'intro_database_jcwdahsk005',
  password: 'abc12345',
});

export default pool;