const express = require("express");
const app = express();

const products = require("./db/products");
const customers = require("./db/customers");

require("dotenv").config();

const port = process.env.PORT || 8080;

app.get("/", (request, response) => {
  response.json("Welcome to our ECaseMerce website");
});

app.get("/products?search=", products.getSearchProducts);
app.get("/products", products.getProducts);
app.get("/products/:id", products.getProductById);
app.delete("/products/:id", products.deleteProduct);

app.post("/customer/create", customers.createCustomer);


app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
