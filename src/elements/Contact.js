import React from 'react'
import devpost from "../media/images/devpost.svg"
import selfPic from "../media/images/self-portrait.jpg"

export default function Contact(props) {
    const scrollContact = props.myRef
  return (
    <div className='d-flex full-page justify-content-center align-items-center' ref={scrollContact}>
      {props.load && 
      <div className='home-appear text-dark' style={{visibility: `${props.visible}`}}>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <div className='rounded-5 mx-3 my-5' style={{width: "20vw", minWidth: "350px", overflow: "hidden"}}>
            <img src={selfPic} placeholder='self portrait' className='w-100'/>
          </div>
          
          <div className='m-5'>
            <div className='fs-1 fw-bold mb-3'>About Me</div>
            <div style={{width: "40vw", minWidth: "350px"}}>
              <p><b>Hi, this is Alexia.</b> I am an undergraduate at Rice University, where I am pursuing my Bachelor's degree in <b>Computer Science</b> and <b>Visual Arts</b>. </p>
              <p>I love creating both <b>visually pleasing</b> and <b>functionally effective</b> user experiences. I am especially fascinated with creating smart and useful user interactions, like changes that come with a button click, which can bring users delightful experiences. I also focus on designing UX solutions that can tackle real-world problems and bring impact to the society.</p>
              <p>As an artist, I focus on the idea of <b>envrionment, technology and future</b>. I like exploring new technologies and experiment with them to create visual effects. Please stay tuned for my senior show in spring 2024, which will involve an artwork build with Unity and the VR Headset.</p>
            </div>
            <div className='mb-3'>Feel free to reach out through <b>yh82@rice.edu</b> or <a className='text-dark fw-bold' target='_blank' href='https://www.linkedin.com/in/alexia-yuening-huang'>LinkedIn</a>.</div>
          </div>
        </div>
        
        
        
      </div>}      
    </div>
  )
}
