import React from 'react'
import selfPic from "../media/images/self-portrait.jpg"

export default function Contact() {
  return (
    <div className='d-flex full-page justify-content-center align-items-center poppins'>
      <div className='home-appear text-dark' >
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <div className='rounded-5 mx-3 my-5' style={{width: "20vw", minWidth: "350px", overflow: "hidden"}}>
            <img src={selfPic} alt='self portrait' className='w-100'/>
          </div>
          
          <div className='m-5'>
            <div className='fs-1 fw-bold mb-3'>About Me</div>
            <div style={{width: "40vw", minWidth: "350px"}}>
              <p>Hi, I'm Alexia Yuening Huang.</p>
              <p>
              I am a <b>Computer Science M.S. student at Stanford University</b> (AI track) and a <b>Rice University</b> alumna with a double major in Computer Science and Visual Arts. My work sits at the intersection of high-performance engineering and intuitive design.
              </p >
              <p>
              With professional experience as an iOS Platform Engineer at <b>Bilibili</b> and a Full-stack Intern at <b>Riot Platforms</b>, I have specialized in full-stack software engineering, devops & infrastructure, and building intelligent, user-facing tools like AI-powered chatbots.
              </p >
              <p>
              I am passionate about <b>continuous learning</b> and <b>technological innovation</b>. Whether I am engineering scalable CLI tools, winning XR hackathons, or researching reinforcement learning for healthcare, my goal is to create functional, delightful experiences that solve real-world problems.
              </p >
              <p>
              As both an engineer and an artist, I thrive on exploring <b>environment and technology</b> to build a more impactful future.
              </p >
            </div>
            <div className='mb-3'>Feel free to reach out through <b>yueningh@stanford.edu</b> or <a className='text-dark fw-bold' target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alexia-yuening-huang'>LinkedIn</a>.</div>
          </div>
        </div>
        
        
        
      </div>      
    </div>
  )
}
