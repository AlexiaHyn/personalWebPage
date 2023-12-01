import React from 'react'

export default function Contact(props) {
    const scrollContact = props.myRef
  return (
    <div className='d-flex full-page justify-content-center align-items-center' ref={scrollContact}>
      {props.load && <div className='home-appear text-white' style={{visibility: `${props.visible}`}}>
        Contact Me @ yh82@rice.edu
      </div>}      
    </div>
  )
}
