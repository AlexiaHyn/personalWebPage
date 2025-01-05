import React from 'react'
import devpost from "../media/images/devpost.svg"
import selfPic from "../media/images/self-portrait.jpg"

export default function Contact() {
  return (
    <div className='d-flex full-page justify-content-center align-items-center poppins'>
      <div className='home-appear text-dark' >
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <div className='rounded-5 mx-3 my-5' style={{width: "20vw", minWidth: "350px", overflow: "hidden"}}>
            <img src={selfPic} placeholder='self portrait' className='w-100'/>
          </div>
          
          <div className='m-5'>
            <div className='fs-1 fw-bold mb-3'>About Me</div>
            <div style={{width: "40vw", minWidth: "350px"}}>
              <p><b>Hi, this is Alexia.</b> I graduated from Rice University in 2024 with a Bachelor's degree in <b>Computer Science</b> and <b>Visual Arts</b>. </p>
              <p>After graduation, I first worked as a full-stack software engineer at Riot, and I am currently working full-time at Bilibili as an iOS developer. </p>
              <p>I love creating both <b>visually pleasing</b> and <b>functionally effective</b> user experiences. I am especially fascinated with creating smart and useful user interactions, like changes that come with a button click, which can bring users delightful experiences.</p>
              <p>I also enjoy <b>continuous learning</b> and embracing techonological challenges. My goal is to find innovative solutions that can tackle real-world problems and bring a meaningful impact to the society.</p>
              <p>As an artist, I focus on the idea of <b>envrionment, technology and future</b>. I like exploring new technologies and experiment with them to create interesting visual effects. </p>
            </div>
            <div className='mb-3'>Feel free to reach out through <b>yh82@rice.edu</b> or <a className='text-dark fw-bold' target='_blank' href='https://www.linkedin.com/in/alexia-yuening-huang'>LinkedIn</a>.</div>
          </div>
        </div>
        
        
        
      </div>      
    </div>
  )
}
