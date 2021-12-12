import mysql from 'mysql';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dominikschumbert',
  database: 'nordwind',
  password: ''
});
connection.connect();

export default connection;