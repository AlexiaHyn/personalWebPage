import React, { useEffect, useState } from 'react'
import { Scrollama, Step } from 'react-scrollama';
import Ora from '../media/videos/Ora';
import ora2 from "../media/images/ora2.png";
import ora3 from "../media/images/ora3.png";
import ora4 from "../media/images/ora4.png";
import oraBg from "../media/images/oraBg.png";


export default function OraPage(props) {
  const [load, setLoads] = useState([false, false, false, false])
  const [ready, setReady] = useState(false);
  useEffect(()=>{
    window.scrollTo(0, 0);
    props.setHideNav(true);
    props.setNavMode("dark");
    setLoads([false, false, false, false]);
    setReady(true);
  }, [])

  const onStepEnter = ({ data }) => {
    console.log(data)
    load[data] = true;
    setLoads([...load]);
  };

  return (
    <div className='full-page bg-black position-relative poppins'>
      {
        ready ?
        <>
        <img src={oraBg} placeholder='firefighters saving forest fires' className='w-100 ora-bg'/>
        <div className='d-flex flex-column w-100 align-items-center p-5 position-relative'>
          <div className='m-5 shadow rounded-3 p-0' style={{overflow: "hidden"}}>
            <Ora/>
          </div>
          <div className='d-flex align-items-center text-light flex-wrap'>
            <div style={{fontSize: "100pt"}}>
              ORA
            </div>
            <div className='ms-3'>
              Won the Grand Prize <br/>
              Best Use of Ultraleap track <br/>
              and XR Trailblazer track <br/>
              at Immerse the Bay XR hackathon at Stanford
            </div>
          </div>
          <Scrollama offset={0.75} onStepEnter={onStepEnter}>
            <Step data={0} key={0}>
              <div className='d-flex flex-column align-items-center w-100'>
              {
                load[0] ?
                <>
                <div className='fw-bold text-white text-opacity-50 my-4'>--------------- · ---------------</div>
                <div className='d-flex text-white justify-content-between w-75 flex-wrap my-4 appear'>
                  <div style={{maxWidth: "300px"}} className='my-4'>
                    <h1 className='fw-bold' style={{color:"rgba(0, 255, 17)"}}>Context</h1>
                    <div className='text-white text-opacity-75'>
                      The application is an AR app to assist firefighters in effectively communicating through hand gestures during fire rescue operations. 
                    </div>
                  </div>
                  <div style={{maxWidth: "300px"}} className='my-4'>
                    <h1 className='fw-bold' style={{color:"rgba(0, 255, 17)"}}>My Role</h1>
                    <div className='fw-bold mb-2' style={{color:"rgba(0, 255, 17, 0.75)"}}>
                      Leading Software Engineer <br/> UI/UX designer
                    </div>
                    <div className='text-white text-opacity-75'>
                      Focused on the Design and implementation of UI, the use of Meta's Mesh API and Depth API on the AR passthrough, and the hand-tracking technology. 
                    </div>
                  </div>
                  <div style={{maxWidth: "300px"}} className='my-4'>
                    <h1 className='fw-bold' style={{color:"rgba(0, 255, 17)"}}>The Team</h1>
                    <div className='text-white text-opacity-75'>Alexia Huang, Rohan Bhowmik, Darynne Lee, Peter Zhang</div>
                  </div>
                </div>
                </>
                :
                <div style={{minHeight: "200px"}}></div>
              }
              </div>
              
            </Step>
            <Step data={1} key={1}>
              <div>
              {
                load[1] ?
                <>
                <div className='d-flex flex-wrap justify-content-center w-100 my-5 appear'>
                  <div className='image-roll-wrapper'>
                    <img src={ora2} placeholder='ora project pictures' style={{maxHeight: "300px"}}/>
                    <div className='image-roll-cover'>
                      I integrated Ultraleap’s hand-gesture recognition technology to recognize communication meanings represented by given hand gestures. 
                    </div>
                  </div>

                  <div className='image-roll-wrapper'>
                    <img src={ora3} placeholder='ora project pictures' style={{maxHeight: "300px"}}/>
                    <div className='image-roll-cover'>
                      The combination of hand-gesture recognition technology and Meta's Mesh API and Depth API enabled realistic, real-time interaction of hand-gesture-triggered water particles within the passthrough environment. 
                    </div>
                  </div>

                  <div className='image-roll-wrapper'>
                    <img src={ora4} placeholder='ora project pictures' style={{maxHeight: "300px"}}/>
                    <div className='image-roll-cover'>
                      Additionally, I focused on simulating an infrared camera effect and created dynamic fire particle effects to augment the app's immersive experience.
                    </div>
                  </div>
                </div>
                </>
                :
                <div style={{minHeight: "200px"}}></div>
              }
              </div>
            </Step>
            <Step data={2} key={2}>
              <div className='d-flex flex-column align-items-center w-100'>
              {
                load[2] ?
                <h4 className='text-white text-opacity-75 text-center my-5 appear'>
                  It is a meaningful project which shows the <span className='text-green'>potential of latest technologies</span> 
                  <br/> in making <span className='text-green'>profound impact on the society</span> .
                </h4>
                :
                <div style={{minHeight: "100px"}}></div>
              }
              </div>
            </Step>
            <Step data={3} key={3}>
              <div className='d-flex flex-column align-items-center w-100'>
              {
                load[3] ?
                <>
                <div className='fw-bold text-white text-opacity-50 my-4'>--------------- · ---------------</div>
                <div className='d-flex my-4 appear'>
                  <div className='text-white text-opacity-75'>Want to know more? <br/> Check out our Devpost page.</div>
                  <button className='btn btn-light btn-large mx-3'><a target='_blank' href='https://devpost.com/software/ora'>{"Devpost >>"}</a></button>
                </div>    
                </>
                :
                <div style={{minHeight: "300px"}}></div>
              }
              </div>
            </Step>
          </Scrollama>
        </div>
        </>
        :
        <></>
      }
      
    </div>
  )
}
