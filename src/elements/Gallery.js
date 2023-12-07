import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import autumnPic from "../media/images/gallery/autumn.jpg";
import springPic from "../media/images/gallery/spring.jpg";
import summerPic from "../media/images/gallery/summer.jpg";
import winterPic from "../media/images/gallery/winter.jpg";

export default function Gallery(props) {
    const scrollGallery = props.myRef

    const loadImage = (image, width, height, alt) => {return (
      <div className='shadow rounded-3'>
        <LazyLoadImage
          alt={alt}
          height={height}
          effect='blur'
          src={image} // use normal <img> attributes as props
          width={width} />
      </div>
    )};

  return (
    <div className='d-flex full-page justify-content-center align-items-center' ref={scrollGallery}>
      {loadImage(springPic, 340, 440, "Spring")}
      {loadImage(summerPic, 340, 440, "Summer")}
      {loadImage(autumnPic, 340, 440, "Autumn")}
      {loadImage(winterPic, 340, 440, "Winter")}
        <div>
        {/* <LazyLoadImage
          alt={"autumn"}
          height={330}
          src={autumnPic} // use normal <img> attributes as props
          width={255} /> */}
      </div>
    </div>
  )
}
