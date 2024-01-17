import React from 'react'

export default function ProjectRight(props) {
  return (
    <div className='w-100 py-5' style={{backgroundColor:`${props.bgColor? props.bgColor : "#fff"}`, minHeight: "300px"}}>
      {
        props.load ? 
        <div className='p-3 py-4 w-100 d-flex flex-row-reverse flex-wrap justify-content-center align-items-center appear'
        >
          
          <div style={{maxWidth: "500px", minWidth: "300px"}} className='m-3 position-relative px-5'>
              <h3>{props.year}</h3>
              {props.projectLogo}         
              <h3 className='fw-bold text-secondary mb-4'>{props.title}</h3>
              <p className='mb-4'>{props.intro}</p>
              <button className='btn btn-dark p-2 px-3'>
                <a target='_blank' href={props.url}>{"Checkout the Project >>"}</a>
              </button>
          </div>

          {
            props.pic2?
            <div style={{maxWidth: "500px", minWidth: "300px"}} className='position-relative mx-5 my-3'>
              <div className='project-circle' style={{backgroundColor: `${props.circleBg}`}}></div>
              <img src={props.pic} placeholder={props.placeholder} className='w-75 project-pic1-right rounded-3 shadow'/>
              <img src={props.pic2} placeholder={props.placeholder} className='w-75 project-pic2-right rounded-3 shadow'/>
            </div>
            :
            <div style={{maxWidth: "500px", minWidth: "300px"}} className='position-relative mx-5 my-3'>
                <div className='project-circle' style={{backgroundColor: `${props.circleBg}`}}></div>
                <img src={props.pic} placeholder={props.placeholder} className='w-100 position-relative shadow rounded-3 mt-5'/>
            </div>
          }
      </div>
      :
      <></>
      }
      
  </div>
    
  )
}
