import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import ScrollamaDemo from './elements/TestScrolly';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./stylings/generalStyle.css"
import "./stylings/animations.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>    
        <Route path='/testscrolly' element={<ScrollamaDemo/>}/>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
