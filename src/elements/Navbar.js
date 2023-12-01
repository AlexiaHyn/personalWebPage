import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-style fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler text-grey pt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list-ul text-grey"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <button className="btn nav-link text-grey" aria-current="page" onClick={()=>props.refs[0].current.scrollIntoView()}>Home</button>
        </li>
        <li className="nav-item">
            <button className="btn nav-link text-grey" aria-current="page" onClick={()=>props.refs[1].current.scrollIntoView()}>Alexia's Gallery</button>
        </li>
        <li className="nav-item">
            <button className="btn nav-link text-grey" aria-current="page" onClick={()=>props.refs[2].current.scrollIntoView()}>Projects</button>
        </li>
        <li className="nav-item">
          <button className="btn nav-link text-grey" aria-current="page" onClick={()=>props.refs[3].current.scrollIntoView()}>Contact Me</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
