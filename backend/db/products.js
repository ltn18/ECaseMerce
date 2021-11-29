const db = require("./db");
const dbCall = db.dbCall;

const getSearchProducts = (req, res, next) => {
  const input = req.query.search;
  const splitInput = input.split("%20");
  console.log(splitInput);
  const sql = "SELECT * FROM products WHERE pattern = % $1%";
  
  // splitInput((ele) => {
  //   dbCall(sql, ele, response.status(200).json());
  // });

  res.send("OK search");
};

const getProducts = (request, response) => {
  const sql = "SELECT * FROM products ORDER BY id ASC";
  dbCall(sql, null, response.status(200).json());
};

const getProductById = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = "SELECT * FROM products WHERE id = $1";
  dbCall(sql, [id], response.status(200).json());
};

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = "DELETE FROM products WHERE id = $1";
  dbCall(sql, [id], response.status(200).json());
};

module.exports = {
  getSearchProducts,
  getProducts,
  getProductById,
  deleteProduct,
};
