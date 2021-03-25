import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { db } from './firebase';

const Payment = () => {
    const history = useHistory();

    const [{basket, user}, dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true); 

    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret to charge an user
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true); // click once

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //payment intent = payment confirmation

            db.collection("users")
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace("/orders");
        })

    };

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Nguyen Trai, Trung Van</p>
                        <p>Hanoi, Vietnam</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                         <form onSubmit={handleSubmit}>
                             <CardElement onChange={handleChange}/>

                             <div className="payment__priceContainer">
                                    <CurrencyFormat 
                                        renderText={(value) => (
                                                <h3>Order total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                             </div>

                             {error && <div>{error}</div>}
                         </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;