import pool from '../connection/pool.connection';

interface CreateEmployeeInput {
  firstname: string;
  lastname: string;
  salary: number;
  hiredate: Date;
  department: string;
}

interface UpdateEmployeeInput extends CreateEmployeeInput {
  id: number;
}

export async function CreateEmployeeService({
  firstname,
  lastname,
  salary,
  hiredate,
  department,
}: CreateEmployeeInput) {
  await pool.query(
    `INSERT INTO employees(firstname, lastname, salary, hiredate, department) VALUES('${firstname}', '${lastname}', ${salary}, '${hiredate}', '${department}')`,
  );
}

export async function GetAllEmployeeService() {
  const employees = await pool.query('SELECT * FROM employees');

  return employees?.rows;
}

export async function UpdateEmployeeService({
  firstname,
  lastname,
  salary,
  hiredate,
  department,
  id,
}: UpdateEmployeeInput) {
  await pool.query(
    `UPDATE employees SET firstname='${firstname}', lastname='${lastname}', salary=${salary}, hiredate='${hiredate}', department='${department}' WHERE id = ${id}`,
  );
}
