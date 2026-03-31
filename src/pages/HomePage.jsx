import React, { useEffect} from 'react'
import Navbar from '../elements/Navbar'
import Home from '../elements/Home';
import Contact from '../elements/Contact';
import Projects from './Projects';

export default function HomePage(props) {
  useEffect(()=>{
    props.setNavIdx(0);
    props.setHideNav(false);
    props.setNavMode("light");
  }, [])

  return (
    <div className='bg-white full-page poppins'>
      <div>
        <Home/>
        <div id="about">
          <Contact/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
      </div>
    </div>
  )
}
