import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1qaz2wsx",
  database: "user_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

const createUser = ({
  name,
  password,
}: {
  name: string;
///  password: string;+
}) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO records (name, password) VALUES (?, ?)`;
    connection.query(sql, [name, password], (err, result) => {
      if(err) reject(err);
      resolve(result);
    });
  })
};

export const user = {
  CreateUser: createUser,
}
