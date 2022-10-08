import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import Order from "./OrdersFolder/Order.jsx";

const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async() => {
      const { data: ordersAPI } = await axios.get('/api/order');
      setOrders(ordersAPI);
    };
    getOrders();
  }, []);
  return (
    <div>
    <h4>Order Table:</h4>
    <Order data={orders}/>
  </div>
  )
}

export default connect(null,null)(Home);