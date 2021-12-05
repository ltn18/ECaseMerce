const { RepeatOneSharp } = require("@material-ui/icons");
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

  res.send("OK searched");
};


const getProducts = (request, response) => {
  const sql = "SELECT * FROM product ORDER BY ProductID ASC LIMIT 10";
  console.log(sql)
  dbCall(sql, null, (result) => {
    response.status = 200
    response.json(result)
  });
};

const getProductById = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = "SELECT * FROM product WHERE ProductID = $1";
  dbCall(sql, [id], (result) => {response.send(result)});
};

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = "DELETE FROM product WHERE ProductID = $1";
  dbCall(sql, [id], (result) => {response.send(result)});
};

module.exports = {
  getSearchProducts,
  getProducts,
  getProductById,
  deleteProduct,
};
