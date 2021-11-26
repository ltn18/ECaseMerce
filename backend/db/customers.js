const db = require('./db')
const dbCall = db.dbCall

const createUsers = (request, response) => {
    const { name, email, address, phoneNumber } = request.body
    const sql = 'INSERT INTO customers (name, email, address, phoneNumber) VALUES ($1, $2, $3, $4)'
    dbCall(sql, [name, email, address, phoneNumber], response.status(200).json())
}

module.exports = {
    createUsers,
}