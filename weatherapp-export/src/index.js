import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Weather from "./app_component/weather.component";
import Display from "./app_component/currentWeather.component";
import Polution from './app_component/Polution';

/* const routing = (
    <Router>
      
        
    
    </Router>

) */


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
