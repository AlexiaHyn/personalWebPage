import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

export default function Project(props) {
  const navigate = useNavigate();
  const [pageReady, setReady] = useState(false);
  return (
    <div className='w-100 py-5' style={{backgroundColor:`${props.bgColor? props.bgColor : "#fff"}`, minHeight: "300px"}}>
      {
        props.load? 
        <div className='p-3 py-4 w-100 d-flex flex-wrap justify-content-center align-items-center appear'
        >
          <div style={{maxWidth: "500px", minWidth: "300px"}} className='m-3 position-relative px-5'>
              <h3>{props.year}</h3>
              {props.projectLogo}         
              <h3 className='fw-bold text-secondary mb-4'>{props.title}</h3>
              <p className='mb-4'>{props.intro}</p>
              {
                props.navigatePage ?
                <button className='btn btn-dark p-2 px-3' onClick={()=>navigate(props.navigatePage)}>
                  {"Checkout the Project >>"}
                </button>
                :
                <button className='btn btn-dark p-2 px-3'>
                  <a target='_blank' href={props.url}>{"Checkout the Project >>"}</a>
                </button>
              }
          </div>
          {
            props.pic2?
            <div style={{maxWidth: "500px", minWidth: "300px"}} className='position-relative mx-5 my-3 appear w-100'>
              <div className='project-circle-wrapper'>
                <div className='project-circle' style={{backgroundColor: `${props.circleBg}`}}></div>
              </div>
              <div className='project-2pic-wrapper'>
                <div className='project-2pic-wrapper-inner'>
                  <img src={props.pic} placeholder={props.placeholder} 
                    style={pageReady? {} : {display: "none"}}
                    className='w-75 project-pic1 rounded-3 shadow appear'/>
                  <img src={props.pic2} placeholder={props.placeholder} 
                    style={pageReady? {} : {display: "none"}}
                    className='w-75 project-pic2 rounded-3 shadow appear' 
                    onLoad={()=>setReady(true)}/>
                </div>
                
              </div>
            </div>
            :
            <div style={{maxWidth: "500px", minWidth: "300px"}} className='position-relative mx-5 my-3 appear w-100'>
              <div className='project-circle-wrapper'>
                <div className='project-circle' style={{backgroundColor: `${props.circleBg}`}}></div>
              </div>
              <div className='project-1pic-wrapper'>
                <img src={props.pic} placeholder={props.placeholder} 
                  style={pageReady? {} : {display: "none"}}
                  className='w-100 position-relative shadow rounded-3 appear' onLoad={()=>setReady(true)}/>
              </div>
            </div>
          }
      </div>
      :
      <></>
      }
      
  </div>
    
  )
}
