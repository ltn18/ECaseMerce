const db = require("./db");
const dbCall = db.dbCall;

const createCustomer = (request, response) => {
  const { name, gender, email, phoneNumber } = request.body;
  const sql =
    "INSERT INTO customer (name, gender, email, phoneNumber) VALUES ($1, $2, $3, $4)";
  dbCall(sql, [name, gender, email, phoneNumber], (result) => {response.send(result)});
};

const logIn = (request, response) => {
  const { email, password } = request.body;
  // WHERE Email = '${email}' AND Password = '${password}'
  const sql = `SELECT * FROM customer WHERE Email = '${email}' AND Password = '${password}'`
  dbCall(sql, null, (result) => {
    console.log(result)
    response.status = 200
    response.json(result)
  });
}

module.exports = {
  createCustomer,
  logIn
};
