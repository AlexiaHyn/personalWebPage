import React from 'react'
import Project from './Project'
import nice from "../media/images/nice.png"
import thresher from "../media/images/thresher.png"

export default function Projects(props) {
    const scrollProject = props.myRef
    return (
    <div className='d-flex full-page justify-content-center align-items-center' ref={scrollProject}>
        {props.load && 
        <div className='home-appear' style={{visibility: `${props.visible}`}}>
            <div className='d-flex flex-wrap'>
                <Project pic={nice} placeholder="NICE project picture" title="NICE" intro = "intro" url="https://riceschedule.com/"/>
                <Project pic={thresher} placeholder="Thresher project picture" title="The Rice Thresher" intro = "intro" url="https://projects.ricethresher.org/"/>
            </div>

           
        </div>}
    </div>
    )
}
