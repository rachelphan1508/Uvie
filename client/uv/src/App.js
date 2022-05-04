
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home.js';
import Auth from './components/Auth/Auth.js';
import Form from './components/Form/Form.js';
import PostDetail from './components/PostDetails/PostDetails.jsx';
import './styles.js';

const App =() => {
  

  //console.log(SignUp);
  return (
    <Router>
       
      <Navbar/>
      <Routes> 
        {/*<Route path="/home" element={<Navigate replace to="/" />} />*/}
        <Route path ="/" element = {<Home/>} />
        <Route path ="/auth" element={<Auth/>} />
        <Route path ="/post" element={<Form/>} />
        <Route path="/posts/:id" element={<PostDetail/>} />
       
      </Routes>
      
    </Router>
  );
}

export default App;

