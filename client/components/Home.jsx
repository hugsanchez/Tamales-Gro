import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import Order from "./OrdersFolder/Order.jsx";

const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async() => {
      try{
        const { data: ordersAPI } = await axios.get('/api/order',{
          headers: {
            authorization: window.localStorage.getItem('token')
          }
        });
        setOrders(ordersAPI);
      } catch(err){
        console.log(err);
      }
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