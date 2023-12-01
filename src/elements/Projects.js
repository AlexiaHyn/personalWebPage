import React from 'react'
import Project from './Project'
import nice from "../media/images/nice.png"
import thresher from "../media/images/thresher.png"

export default function Projects(props) {
    const scrollProject = props.myRef
    return (
    <div className='d-flex full-page justify-content-center align-items-center' ref={scrollProject}>
        {props.load && 
        <div className='home-appear text-white d-flex flex-column align-items-center p-5' style={{visibility: `${props.visible}`}}>

            <Project pic={nice} placeholder="NICE project picture" title="NICE" intro = "intro" url="https://riceschedule.com/"/>
            <Project pic={thresher} placeholder="Thresher project picture" title="The Rice Thresher" intro = "intro" url="https://projects.ricethresher.org/"/>
            
            </div>}
        </div>
    )
}