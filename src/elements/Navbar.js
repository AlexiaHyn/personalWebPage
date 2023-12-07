import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-style fixed-top poppins" data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler text-secondary pt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list-ul text-secondary"></i>
    </button>
      <button ref={props.navRefs[0]} className="btn border-0 text-dark fs-3 fw-bold" 
        aria-current="page" onClick={()=>{navigate("/"); props.refs[0].current.scrollIntoView()}}>
          AYH
      </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
        <li className="nav-item me-3">
            <button ref={props.navRefs[1]} className="btn border-0 nav-link text-secondary" aria-current="page" onClick={()=>{navigate("/"); props.refs[1].current.scrollIntoView()}}>Projects</button>
        </li>
        <li className="nav-item me-3">
            <button ref={props.navRefs[2]} className="btn border-0 nav-link text-secondary" aria-current="page" onClick={()=>{navigate("/gallery")}}>Alexia's Gallery</button>
        </li>
        <li className="nav-item">
          <button ref={props.navRefs[3]} className="btn border-0 nav-link text-secondary" aria-current="page" onClick={()=>navigate("/about")}>About Me</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
