import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import LoginForm from "./LoginForm.jsx";
import Home from '../Home.jsx';

import authToken from './helpers/authToken'

const Login = ({ attemptLogin }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({username: '', password: ''});
  const [error, setError] = useState('');

  const loginFunc = async(details) => {
    try{
      await authToken(details);
      const token = window.localStorage.getItem('token');

      if(token){
        const { data:userAPI } = await axios.get('/api/auth', {
          headers: {
            authorization: token,
          },
        });

        if(userAPI){
          setUser({...user, ...userAPI})
        }
      }
    } catch(err){
      console.log(err);
    }
  };

  const logoutFunc = () => {
    console.log('logout')
  }

  return(
    <div>
      {(user.username !== '') ? (
        <Home/>
      ) : (
        <LoginForm loginFunc={loginFunc} error={error}/>
      ) }
    </div>
  );
};



export default connect(null,null)(Login);
