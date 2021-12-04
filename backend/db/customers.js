const db = require("./db");
const dbCall = db.dbCall;

const createCustomer = (request, response) => {
  const { name, gender, email, phoneNumber } = request.body;
  const sql =
    "INSERT INTO customer (name, gender, email, phoneNumber) VALUES ($1, $2, $3, $4)";
  dbCall(sql, [name, gender, email, phoneNumber], response.status(200).json());
};

module.exports = {
  createCustomer,
};
