import React, { useRef, useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './elements/Navbar';
import ScrollamaDemo from './elements/TestScrolly';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./stylings/generalStyle.css"
import "./stylings/animations.css"


function App() {
  const scrollHome = useRef(null);
  const scrollGallery = useRef(null);
  const scrollProject = useRef(null);
  const scrollContact = useRef(null);
  const refs=[scrollHome,scrollProject, scrollGallery, scrollContact];

  const navHome = useRef(null);
  const navGallery = useRef(null);
  const navProject = useRef(null);
  const navContact = useRef(null);
  const navRefs=[navHome,navProject, navGallery, navContact];

  const [visibles, setVisibles] = useState([true, false, false, false])
  return (
    <BrowserRouter>
      <Navbar refs = {refs} navRefs = {navRefs} visibles={visibles}/>
      <Routes> 
        <Route path='/' element={<HomePage refs = {refs} navRefs = {navRefs} visibleControl={[visibles, setVisibles]}/>} />
        {/* <Route path='/testscrolly' element={<ScrollamaDemo/>}/>     */}
        <Route path='/about' element={<AboutPage/>}/>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
