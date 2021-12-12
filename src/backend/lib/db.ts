import mysql from 'mysql';
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'pc-konfigurator',
  password: ''
});
connection.connect();

export default connection;