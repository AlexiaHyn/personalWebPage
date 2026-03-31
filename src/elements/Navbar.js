import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const navAbout = useRef(null);
  const navProjects = useRef(null);
  const navGallery = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const getDocTop = (el) => el.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      const aboutEl = document.getElementById('about');
      const projectsEl = document.getElementById('projects');
      if (!aboutEl || !projectsEl) return;

      const scrollMid = window.scrollY + window.innerHeight / 2;
      const aboutTop = getDocTop(aboutEl);
      const projectsTop = getDocTop(projectsEl);

      if (scrollMid >= projectsTop) {
        setActiveSection('projects');
      } else if (scrollMid >= aboutTop) {
        setActiveSection('about');
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollTo = (id, btnRef) => {
    btnRef?.current?.blur();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-style fixed-top poppins" data-bs-theme={props.navMode}>
      <div className="container-fluid">
        <button className="navbar-toggler text-opacity-75 pt-2 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <button className="btn border-0 fs-3 fw-bold"
          aria-current="page" onClick={()=>navigate("/")}>
            AYH
        </button>
          {
            props.hideNav ?
            <></>
            :
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li className="nav-item me-3">
                <button ref={navAbout} className={`btn border-0 nav-link text-opacity-75${activeSection === 'about' ? ' nav-active' : ''}`} aria-current="page" onClick={()=>scrollTo('about', navAbout)}>About Me</button>
              </li>
              <li className="nav-item me-3">
                <button ref={navProjects} className={`btn border-0 nav-link text-opacity-75${activeSection === 'projects' ? ' nav-active' : ''}`} aria-current="page" onClick={()=>scrollTo('projects', navProjects)}>Projects</button>
              </li>
              <li className="nav-item">
                <button ref={navGallery} className="btn border-0 nav-link text-opacity-75" aria-current="page" onClick={()=>{ window.scrollTo(0, 0); navigate("/gallery"); }}>Alexia's Gallery</button>
              </li>
            </ul>
          </div>
          }
      </div>
    </nav>
  )
}
