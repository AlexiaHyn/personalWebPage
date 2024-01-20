import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import fish1 from "../media/images/gallery/goldfish1.jpg";
import fish2 from "../media/images/gallery/goldfish2.jpg";
import zoo1 from "../media/images/gallery/zoo1.jpg";
import zoo2 from "../media/images/gallery/zoo2.jpg";
import autumnPic from "../media/images/gallery/autumn.jpg";
import springPic from "../media/images/gallery/spring.jpg";
import summerPic from "../media/images/gallery/summer.jpg";
import winterPic from "../media/images/gallery/winter.jpg";

export default function Gallery(props) {

    const loadImage = (image, width, height, alt, name, media, time) => {return (
      <div className='gallery-image-wrapper shadow'>
        <LazyLoadImage
          alt={alt}
          height={height}
          effect='blur'
          src={image} // use normal <img> attributes as props
          width={width} />
        <div className='gallery-image-text'>
          <div className='fw-bold'>{name}</div>
          <div className='font-sm'>{time}</div>
          <div className='font-sm'>{media}</div>
        </div>
      </div>
    )};

  return (
    <div className='d-flex full-page justify-content-center flex-wrap poppins pt-5 mt-4'>
      {loadImage(fish1, 504, 378, "The gold fish", "The gold fish - sketch", "pencil and ink on paper", "Oct 2023")}
      {loadImage(fish2, 378, 504, "The gold fish", "The gold fish - sculpture", "Film wrapper, metal wire, clay, and light strip", "Nov 2023")}
      {loadImage(zoo1, 504, 378, "The Zoo", "The zoo - sculpture", "Film paper, acrylic board, light strip", "Nov 2023")}
      {loadImage(zoo2, 378, 504, "The Zoo", "The zoo - intro", "Mirror sticker, paper", "Nov 2023")}
      {loadImage(springPic, 340, 440, "Spring", "Season - Spring", "digital drawing", "July 2023")}
      {loadImage(summerPic, 340, 440, "Summer", "Season - Summer", "digital drawing", "Sept 2023")}
      {loadImage(autumnPic, 340, 440, "Autumn", "Season - Autumn", "digital drawing", "Sept 2023")}
      {loadImage(winterPic, 340, 440, "Winter", "Season - Winter", "digital drawing", "Sept 2023")}

    </div>
  )
}
