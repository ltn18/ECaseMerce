const db = require("./db");
const dbCall = db.dbCall;

const addToOrder = async (req, res, next) => {
  const sql = "";
  dbCall(sql);
  res.send();
};

const getOrder = async (req, res, next) => {
  const sql = "";
  dbCall(sql);
  res.send();
};

module.exports = {
  addToOrder,
  getOrder,
}