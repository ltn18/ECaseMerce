import React from 'react';
import "../css/Checkout.css";
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../StateProvider';

const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue();

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
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Checkout;