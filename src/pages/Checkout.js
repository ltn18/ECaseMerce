import React from 'react';
import "../css/Checkout.css";
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import axios from "axios"

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleSubmitOrder = async (e) => {
        e.preventDefault()
        console.log(basket)
        const data = {customerID: window.localStorage.getItem("CustomerID"), basket: basket}
        await axios.post("http://localhost:8080/order", data);
    }

    return (
        <div className="checkout">
            <div className='checkout__left'>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                        />
                    ))}
                    <button style={{
                        width: 150,
                        height: 30,
                    }} onClick={handleSubmitOrder}>Order</button>

                </div>
            </div>

        </div>
    );
};

export default Checkout;