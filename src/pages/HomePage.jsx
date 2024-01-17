import React, { useEffect} from 'react'
import Navbar from '../elements/Navbar'
import Home from '../elements/Home';
import Projects from './Projects';

export default function HomePage(props) {
  useEffect(()=>{
    props.setNavIdx(0)
  }, [])

  return (
    <div className='bg-white full-page poppins'>
      <div>
        <Home/>
        <Projects/>
      </div>
    </div>
  )
}
