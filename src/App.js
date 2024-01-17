import React, { useRef, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import Navbar from './elements/Navbar';
import Projects from './pages/Projects';
import ScrollamaDemo from './elements/TestScrolly';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./stylings/generalStyle.css"
import "./stylings/animations.css"


function App() {
  const [navIdx, setNavIdx] = useState(0);

  return (
    <BrowserRouter>
      <Navbar navIdx = {navIdx}/>
      <Routes> 
        <Route path='/' element={<HomePage setNavIdx={setNavIdx}/>} />
        {/* <Route path='/testscrolly' element={<ScrollamaDemo/>}/>     */}
        {/* <Route path='/projects' element={<Projects/>}/>  */}
        <Route path='/gallery' element={<GalleryPage/>}/> 
        <Route path='/about' element={<AboutPage/>}/>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
