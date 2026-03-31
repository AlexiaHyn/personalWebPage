import React, { useEffect} from 'react'
import Home from '../elements/Home';
import Contact from '../elements/Contact';
import Projects from './Projects';

export default function HomePage({ setNavIdx, setHideNav, setNavMode }) {
  useEffect(()=>{
    setNavIdx(0);
    setHideNav(false);
    setNavMode("light");
  }, [setNavIdx, setHideNav, setNavMode])

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
