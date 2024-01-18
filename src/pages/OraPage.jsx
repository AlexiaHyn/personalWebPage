import React, { useEffect } from 'react'
import Ora from '../media/videos/Ora';
import ora2 from "../media/images/ora2.png";
import ora3 from "../media/images/ora3.png";
import ora4 from "../media/images/ora4.png";
import oraBg from "../media/images/oraBg.png";

export default function OraPage(props) {
  useEffect(()=>{
    props.setHideNav(true);
    props.setNavMode("dark");
  }, [])
  return (
    <div className='full-page bg-dark position-relative'>
      <img src={oraBg} placeholder='firefighters saving forest fires' className='w-100 ora-bg'/>
      <div className='d-flex flex-column w-100 align-items-center p-5 position-relative'>
        <div className='m-5 shadow rounded-3 p-0' style={{overflow: "hidden"}}>
          <Ora/>
        </div>
        <img src={ora2} placeholder='ora project pictures' className='w-75'/>
        <img src={ora3} placeholder='ora project pictures' className='w-75'/>
        <img src={ora4} placeholder='ora project pictures' className='w-75'/>
      </div>
    </div>
  )
}
