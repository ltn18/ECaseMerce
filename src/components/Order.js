import React, { useEffect, useState } from "react";
import "../css/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import axios from "axios";

const Order = ({order}) => {
  // useEffect(() => {
  //   const URL = "http://localhost:8080/myorder"
  //   const data = {customer_id: window.localStorage.getItem("CustomerID")}
  //   console.log("hello from Order")
  //   axios.post(URL, data).then((result) => {
  //     setOrder(result)
  //     console.log(result)
  //   })
  // }, [])
  console.log(order)
  return (
    <div className="order">
        <CheckoutProduct
          id={order.ProductID}
          title={order.Name}
          price={order.Price}
          hideButton
        />
    </div>
  );
};

export default Order;
