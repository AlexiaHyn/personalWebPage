import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProjectRight(props) {
  const navigate = useNavigate();
  const [imgReady, setImgReady] = useState(false);
  const lastImgRef = useRef(null);
  useEffect(() => {
    if (lastImgRef.current?.complete) setImgReady(true);
  }, [props.load]);
  return (
    <div className='w-100 py-5' style={{backgroundColor:`${props.bgColor? props.bgColor : "#fff"}`, minHeight: "300px"}}>
      {
        props.load?
        <div className='p-3 py-4 w-100 d-flex flex-row-reverse flex-wrap justify-content-center align-items-center appear'
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
                  <a target='_blank' rel='noreferrer' href={props.url}>{"Checkout the Project >>"}</a>
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
                  <div className='w-75 project-pic1-right position-relative'>
                    {!imgReady && <div className='img-skeleton rounded-3 position-absolute' style={{inset:0, minHeight:'160px'}}/>}
                    <img src={props.pic} alt={props.placeholder}
                      style={{opacity: imgReady?1:0, transition:'opacity 0.3s ease'}}
                      className='w-100 rounded-3 shadow appear'
                      loading="lazy"/>
                  </div>
                  <div className='w-75 project-pic2-right position-relative'>
                    {!imgReady && <div className='img-skeleton rounded-3 position-absolute' style={{inset:0, minHeight:'160px'}}/>}
                    <img src={props.pic2} alt={props.placeholder}
                      ref={lastImgRef}
                      style={{opacity: imgReady?1:0, transition:'opacity 0.3s ease'}}
                      className='w-100 rounded-3 shadow appear'
                      onLoad={()=>setImgReady(true)}
                      loading="lazy"/>
                  </div>
                </div>
              </div>
            </div>
            :
            <div style={{maxWidth: "500px", minWidth: "300px"}} className='position-relative mx-5 my-3 appear w-100'>
              <div className='project-circle-wrapper'>
                <div className='project-circle' style={{backgroundColor: `${props.circleBg}`}}></div>
              </div>
              <div className='project-1pic-wrapper'>
                <div className='position-relative' style={{width:'80%'}}>
                  {!imgReady && <div className='img-skeleton rounded-3 position-absolute' style={{inset:0, minHeight:'200px'}}/>}
                  <img src={props.pic} alt={props.placeholder}
                    ref={lastImgRef}
                    style={{opacity: imgReady?1:0, transition:'opacity 0.3s ease'}}
                    className='w-100 shadow rounded-3 appear'
                    onLoad={()=>setImgReady(true)}
                    loading="lazy"/>
                </div>
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
