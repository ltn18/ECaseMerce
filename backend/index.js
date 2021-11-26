const express = require('express')
const app = express()

const products = require('./db/products')

require('dotenv').config();

const port = process.env.PORT || 8080

app.get('/', (request, response) => {
    response.json('Welcome to our website')
})

app.get('/products', products.getProducts)
app.get('/products/:id', products.getProductById)
app.delete('/products/:id', products.deleteProduct)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

