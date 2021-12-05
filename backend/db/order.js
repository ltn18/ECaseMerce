const { response } = require("express");
const db = require("./db");
const dbCall = db.dbCall;

const addToOrder = async (req, res) => {
  const data = req.body
  const order_id = Math.floor(Math.random() * 100000) + 600000;
  const basket = data['basket']
  const customer_id = data['customerID']
  basket.forEach(product => {
    const sql = `INSERT INTO in_order (ProductID, OrderID) VALUES ('${product.id}', '${order_id}')`;
    dbCall(sql, null, (result) => {
      console.log(result);
    });
  })
  const sql = `INSERT INTO final341.orders (CustomerID, OrderID, OrderDate, Status) VALUES ('${customer_id}', '${order_id}', '2021-12-04', 'Shipping');`
  dbCall(sql, null, (result) => {
    res.status = 200
    console.log(result);
  });
};

const getOrder = async (req, res) => {
  const customer_id = req.body['customer_id']
  const sql = `SELECT distinct product.* from in_order, orders, product where in_order.OrderID = orders.OrderID and orders.CustomerID = '${customer_id}' LIMIT 20`;
  console.log(sql)
  dbCall(sql, null, (result) => {
    res.status = 200;
    res.json(result);
    console.log(result)
  });
};



module.exports = {
  addToOrder,
  getOrder,
}
// INSERT INTO final341.in_order (ProductID, OrderID)
// VALUES ('10002', '000001');

// INSERT INTO final341.orders (CustomerID, OrderID, OrderDate, Status)
// VALUES ('12566', '000001', '2021-11-30', 'Delivered');