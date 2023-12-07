import React from 'react'

export default function Project(props) {
  return (
    <div className='w-100 my-5'>
      <div className='p-3 py-4 w-100 d-flex flex-wrap justify-content-center align-items-center'>
        <div style={{maxWidth: "500px", minWidth: "300px"}} className='m-3 position-relative'>
            <h3>{props.year}</h3>
            {props.projectLogo}         
            <h3 className='fw-bold text-secondary mb-4'>{props.title}</h3>
            <p className='mb-4'>{props.intro}</p>
            <button className='btn btn-outline-dark p-2 px-3'>
              <a target='_blank' href={props.url}>{"Checkout the Project >>"}</a>
            </button>
        </div>
        <div style={{maxWidth: "500px", minWidth: "300px"}} className='position-relative mx-4'>
            <img src={props.pic} placeholder={props.placeholder} className='w-100'/>
        </div>
        
    </div>
  </div>
    
  )
}
