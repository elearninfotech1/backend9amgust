const mysql = require("mysql");

const Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3308,
  database: "dbaugust9am",
});

Connection.connect((err, con) => {
  if (err) throw err;
  //console.log("connected");
});

module.exports = Connection;
