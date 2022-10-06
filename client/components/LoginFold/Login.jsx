import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import LoginForm from "./LoginForm.jsx";

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
        <div className="welcome">
            <h2>Welcome, <span>{user.username}</span></h2>
            <button>Logout</button>
        </div>
      ) : (
        <LoginForm loginFunc={loginFunc} error={error}/>
      ) }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  attemptLogin: async() => {
    // try{
    //   const token = window.localStorage.getItem('token');

    //   if(token){
    //     const { data:userAPI } = await axios.get('/api/auth', {
    //       headers: {
    //         authorization: token,
    //       },
    //     });

    //     if(userAPI){
    //       setUser({...user, userAPI})
    //       return true;
    //     }
    //   }
    // } catch(err){
    //   console.log(err);
    // }
  }
});

export default connect(null,mapDispatchToProps)(Login);
