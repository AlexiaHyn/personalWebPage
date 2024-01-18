import React, { useRef, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import Navbar from './elements/Navbar';
import OraPage from './pages/OraPage';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./stylings/generalStyle.css"
import "./stylings/animations.css"


function App() {
  const [navIdx, setNavIdx] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const [navMode, setNavMode] = useState("light");
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<HomePage setNavIdx={setNavIdx} setHideNav={setHideNav} setNavMode={setNavMode}/>} />
        <Route path='/gallery' element={<GalleryPage setHideNav={setHideNav}/>} /> 
        <Route path='/about' element={<AboutPage setHideNav={setHideNav}/>} />
        <Route path='/project-ora' element={<OraPage setHideNav={setHideNav} setNavMode={setNavMode}/>} />        
      </Routes>
      <Navbar navIdx = {navIdx} hideNav = {hideNav} navMode={navMode}/>
    </BrowserRouter>
  );
}

export default App;
