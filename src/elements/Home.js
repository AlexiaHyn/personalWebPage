import React from 'react'
import pic1 from "../media/images/floralportrait1.png"

export default function Home(props) {
    const scrollHome = props.myRef
  return (
    <div className='text-white full-page m-0' ref={scrollHome}>
      { props.load &&
        <div style={{visibility: `${props.visible}`}} className="row">
      <div className='col-md-7 col-12 home-appear' >
          <div className='d-flex justify-content-center align-items-center full-height header-style'>
            <div className='bg-transblack p-3'>
              <h1>
                Alexia Yuening Huang
              </h1>
              <h5 className='text-grey'>UX Designer | Frontend Developer</h5>
              <div>
                <a className='text-grey pe-1' target={'_blank'} href='https://www.linkedin.com/in/alexia-yuening-huang'>LinkedIn</a>
                <i className="bi bi-box-arrow-up-right text-grey"></i>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-5 col-12 p-0 home-appear'>
            <img src={pic1} placeholder="floral portrait" className='full-width'/>
        </div>
      </div>}  
    </div>
  )
}
