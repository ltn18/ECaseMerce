import React, { useEffect, useState } from 'react';
import Order from '../components/Order';
import "../css/Orders.css";
import { useStateValue } from '../StateProvider';
import axios from "axios";

const Orders = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrder] = useState([])
    useEffect(() => {
        const URL = "http://localhost:8080/myorder"
        const data = {customer_id: window.localStorage.getItem("CustomerID")}
        console.log("hello from Order")
        console.log(data)
        axios.post(URL, data).then((result) => {
            setOrder(result.data)
            console.log(result.data)
    })
  }, [])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )

};

export default Orders; 