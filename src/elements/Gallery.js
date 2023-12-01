import React from 'react'

export default function Gallery(props) {
    const scrollGallery = props.myRef
  return (
    <div className='d-flex full-page justify-content-center align-items-center' ref={scrollGallery}>
      {props.load && <div className='home-appear text-white' style={{visibility: `${props.visible}`}}>Alexia's Gallery</div>}
    </div>
  )
}
