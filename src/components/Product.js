import React, { useEffect } from 'react';
import "../css/Product.css";
import { useStateValue } from '../StateProvider';

const Product = ({id, title, image, price, rating}) => {
    const [{basket, db}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            
            <img className="product__image" src={image} alt={title}></img>

            <button onClick={addToBasket}>Add to basket</button>
            
        </div>
    );
};

export default Product;