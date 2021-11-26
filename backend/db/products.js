const db = require('./db')
const dbCall = db.dbCall

const getProducts = (request, response) => {
    const sql = 'SELECT * FROM products ORDER BY id ASC'
    dbCall(sql, null, response.status(200).json())
}

const getProductById = (request, response) => {
    const id = parseInt(request.params.id)
    const sql = 'SELECT * FROM products WHERE id = $1'
    dbCall(sql, [id], response.status(200).json())
}

const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const sql = 'DELETE FROM products WHERE id = $1'
    dbCall(sql, [id], response.status(200).json())
}

module.exports = {
    getProducts,
    getProductById,
    deleteProduct,
}
