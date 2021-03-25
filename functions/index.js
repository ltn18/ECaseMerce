const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")("sk_test_51IEpe6JlanqIcLJbXifwR37BzYevxohRbPtgwKRtvuzKcZ1qfsbC1OIUJGKXZiqTeN9LxYQIja8qihI7Q128ef6p00eONNtNcZ");


// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => { 
    response.status(200).send("This is my project - contact me for work ttt45@case.edu");
})

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });
    
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app)