import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home.js';
import Auth from './components/Auth/Auth.js';
const App =() => {

  //console.log(SignUp);
  return (
    <Router>
       
      <Navbar/>
      <Routes> 
        <Route exact path ="/" element = {<Home/>} />
        <Route path ="/auth" element={<Auth/>} />
        <Route path="/home" element={<Navigate replace to="/" />} />
       
      </Routes>
      
    </Router>
  );
}

export default App;
