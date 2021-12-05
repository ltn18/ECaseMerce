import React from "react";
import "../css/Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating, condition, qty }) => {
  const [{ basket, db }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__condition">
          <span>Condition: {condition}</span>
        </div>
        <div className="product__qty">
          <span>Qty: {qty}</span>
        </div>
      </div>

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
