import React from 'react';
import '../css/CheckoutProduct.css'
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({id, title, price, hideButton}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    };

    return (
        <div className="checkoutProduct">

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
                {!hideButton && (<button onClick={removeFromBasket}>Remove from basket</button>)}
                
            </div>
        </div>
    );
};

export default CheckoutProduct;