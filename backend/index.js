const express = require("express");
const cors = require('cors')
const parser = require('body-parser')
const app = express();
app.use(cors());
app.use(parser.urlencoded());
app.use(parser.json())
const products = require("./db/products");
const customers = require("./db/customers");
const db = require("./db/db");
const order = require("./db/order")
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 8080;
const con = db.connectDB()


app.get("/", (request, response) => {
  response.json("Welcome to our ECaseMerce website");
});

app.post("/order", order.addToOrder);
app.post("/myorder", order.getOrder)
app.get("/products?search=", products.getSearchProducts);
app.get("/products", products.getProducts);
app.get("/products/:id", products.getProductById);
app.delete("/products/:id", products.deleteProduct);

app.post("/customer/create", customers.createCustomer);
app.post("/customer/login", customers.logIn);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
