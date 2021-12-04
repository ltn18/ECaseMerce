const db = require("./db");
const dbCall = db.dbCall;

const addToCart = async (req, res, next) => {
  const sql = "";
  dbCall(sql);
  res.send("OK add to Cart");
}

const deleteFromCart = async (req, res, next) => {
  const sql = "";
  dbCall(sql);
  res.send("OK add to Cart");
}

const getProdFromCart = async (req, res, next) => {
  const sql = "";
  dbCall(sql);
  res.send("OK add to Cart");
}

module.exports = {
  addToCart,
  deleteFromCart,
  getProdFromCart
}