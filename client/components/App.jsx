import React,{ Component } from "react";
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from "./LoginFolder/Login.jsx";
import Home from "./Home.jsx";

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router>
        <Routes>
            <Route path='/login' element={ <Login/> }/>
            <Route path="/home" element={ <Home/>}/>
        </Routes>
      </Router>
    )
  }
}

export default connect(null,null)(App);