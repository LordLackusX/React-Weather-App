import React, { Component } from 'react';
import {BrowserRouter as Router, Link , Route} from 'react-router-dom';
import Polution from './Polution';







class Navigation extends Component {
    render () {
      return (
        <Router>

        <Route path="/Polution" component={Polution}/> 

        <Link to="/Polution"> <button className="btn btn-warning " id="Router Btn" onClick=""> Air Pollution Info</button>  </Link>


</Router>
      );
    }
  }













export default Navigation;