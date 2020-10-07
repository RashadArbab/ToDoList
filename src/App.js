import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List' ; 
import List2 from './List2';
import List3 from './List3';
import Navbar from './Navbar';
import {BrowserRouter, Route, Redirect,  } from 'react-router-dom'

import LandingPage from './LandingPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter> 
      <Navbar/> 

      <Route path='/SchoolList' component={List} exact/> 
      <Route path='/WorkList' component={List2} exact/> 

      <Route path='/LifeList' component={List3} exact/> 

       
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
