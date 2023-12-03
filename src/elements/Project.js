import React from 'react'

export default function Project(props) {
  return (
    <div>
      <div className='p-3 py-4 row m-3' onClick={()=>window.open(props.url)}>
        <div className='col-md-5 col-12'>
            <h3>{props.title}</h3>
            <p>{props.intro}</p>
        </div>
        <div className='col-md-7 col-12'>
            <img src={props.pic} placeholder={props.placeholder} className='full-width'/>
        </div>
        
    </div>
  </div>
    
  )
}
