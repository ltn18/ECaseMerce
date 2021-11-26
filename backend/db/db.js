require("dotenv").config();

const mysql = require("mysql");

const con = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
});

con.connect((error) => {
  if (error) throw error;
  console.log("Database connected!");
});

const dbCall = (sql, params, callback) => {
  if (params == null) {
    con.query(sql, (error, result) => {
      if (error) {
        throw error;
      } else {
        callback(result);
      }
    });
  } else {
    con.query(sql, params, (error, result) => {
      if (error) {
        throw error;
      } else {
        callback(result);
      }
    });
  }
};

module.exports = {
  dbCall,
};
