import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import LoginForm from "./LoginForm.jsx";
import Home from '../Home.jsx';
import Loader from "../Loader.jsx";

import authToken from './helpers/authToken'

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({username: '', password: ''});
  const [error, setError] = useState('');

  const [loader, showLoader, hideLoader] = Loader();


  let token = window.localStorage.getItem('token');
  useEffect(() => {
    const afterLogin = async() => {
      try{
        if(window.localStorage.getItem('token')){
          if(token){
            showLoader();
            const { data: userAPI } = await axios.get('/api/auth', {
              headers:{
                authorization: token,
              },
            });
            if(userAPI){
              hideLoader();
              setUser({...user, ...userAPI})
            }
          }
        }
      } catch(err){
        console.log(err);
      }
    }
    afterLogin();
  },[token])

  const loginFunc = async(details) => {
    try{
      await authToken(details);
      token = window.localStorage.getItem('token');
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
    window.localStorage.removeItem('token');
    setUser({username: '', password:''})
  };

  return(
    <div>

      {(user.username !== '') ? (
        <Home/>
      ) : (
        <LoginForm loginFunc={loginFunc} error={error}/>
      ) }
      <button onClick={logoutFunc}>Logout</button>
      {loader}
    </div>
  );
};



export default connect(null,null)(Login);
