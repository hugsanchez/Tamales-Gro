import React, { useState } from "react";
import { connect } from "react-redux";

const LoginForm = ({ loginFunc, error }) => {
  const [details, setDetails] = useState({username:'', password: ''});

  const submitHandler = (evt) => {
    evt.preventDefault();
    loginFunc(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type='text' name='username' id='username' 
            onChange={evt => setDetails({...details, username:evt.target.value})} 
            value={details.username}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type='password' name='password' id='password'
            onChange={evt => setDetails({...details, password:evt.target.value})}
            value={details.password}/>
        </div>
      </div>
      <input type='submit'/>
    </form>
  )
};


export default connect(null,null)(LoginForm);