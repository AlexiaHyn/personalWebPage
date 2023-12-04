import React from 'react'

export default function Project(props) {
  return (
    <div className='w-100 mb-5'>
      <div className='p-3 py-4 w-100 d-flex flex-wrap justify-content-center'>
        <div style={{maxWidth: "500px", minWidth: "300px"}} className='m-3'>
            <h3>{props.year}</h3>            
            <img src={props.projectLogo} placeholder={props.placeholder} className='w-100 mt-2 mb-3'/>
            <h3 className='fw-bold text-secondary mb-4'>{props.title}</h3>
            <p className='mb-4'>{props.intro}</p>
            <button className='btn btn-outline-dark p-2 px-3'>
              <a target='_blank' href={props.url}>{"Checkout the Project >>"}</a>
            </button>
        </div>
        <div style={{maxWidth: "500px", minWidth: "300px"}} className='position-relative mx-3'>
            <img src={props.pic} placeholder={props.placeholder} className='w-100'/>
        </div>
        
    </div>
  </div>
    
  )
}
