import React, { useEffect, useState } from 'react'
import pic1 from "../media/images/floralportrait4.png"
import pic2 from "../media/images/floralportrait3.png"
import devpost from "../media/images/devpost.svg";

export default function Home() {
  const [pageReady, setReady] = useState(false);
  useEffect(()=>{
    setReady(true);
  }, [])
  return (
    <div className='full-page m-0 position-relative bg-trans-grey'>
      {
        pageReady ?
        <>
        <div className="row transition-all">
          <div className='col-md-7 col-12 home-appear' style={{zIndex: 1}}>
            <div className='d-flex justify-content-center align-items-center full-height header-style'>
              <div className='bg-light bg-opacity-75 p-5 rounded-2 shadow '>
                <h1 className='mb-3'>
                  Alexia Yuening Huang
                </h1>
                <h5 className='text-dark text-opacity-75 mb-3'>iOS Developer | full-stack software developer | Artist</h5>
                <div className='d-flex justify-content-start align-items-center'>
                  <a target='_blank' href='https://www.linkedin.com/in/alexia-yuening-huang' className='me-2'>
                    <i className="bi bi-linkedin text-dark fs-4"></i>
                  </a>
                  
                  <a target='_blank' href='https://devpost.com/AlexiaHuang'>
                    <img src={devpost} placeholder='devpost' style={{width: "27px"}}/>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-5 col-12 p-0 home-appear d-flex justify-content-end position-relative' style={{zIndex: 0}}>
              <img src={pic1} placeholder="floral portrait" className='full-screen-height'/>
              <img src={pic2} placeholder="floral portrait" className='full-screen-height floral-appear'/>
          </div>
        </div>
        <div className='bottom-white-transition-border'></div>
        </>
        :
        <></>

      }
        
    </div>
  )
}
