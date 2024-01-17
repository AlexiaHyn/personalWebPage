import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  const navigate = useNavigate();
  const navHome = useRef(null);
  const navGallery = useRef(null);
  const navContact = useRef(null);
  const navRefs=[navHome, navGallery, navContact];

  useEffect(()=>{
    navRefs[props.navIdx]?.current?.focus();
  }, [props.navIdx])
  return (
    <nav className="navbar navbar-expand-lg navbar-style fixed-top poppins" data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler text-secondary pt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list-ul text-secondary"></i>
    </button>
      <button ref={navHome} className="btn border-0 text-dark fs-3 fw-bold" 
        aria-current="page" onClick={()=>{navigate("/");}}>
          AYH
      </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
        <li className="nav-item me-3">
            <button ref={navHome} className="btn border-0 nav-link text-secondary" aria-current="page" onClick={()=>{navigate("/")}}>Projects</button>
        </li>
        <li className="nav-item me-3">
            <button ref={navGallery} className="btn border-0 nav-link text-secondary" aria-current="page" onClick={()=>{navigate("/gallery")}}>Alexia's Gallery</button>
        </li>
        <li className="nav-item">
          <button ref={navContact} className="btn border-0 nav-link text-secondary" aria-current="page" onClick={()=>navigate("/about")}>About Me</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
