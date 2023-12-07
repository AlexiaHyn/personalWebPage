import React from 'react'
import Project from './Project'
import nice from "../media/images/nice.png"
import thresher from "../media/images/thresher.png"
import niceLogo from "../media/images/NiceLogo.svg";
import thresherLogo from "../media/images/the-rice-thresher-logo.gif"

export default function Projects(props) {
    const scrollProject = props.myRef
    return (
    <div className='d-flex w-100' ref={scrollProject}>
        {props.load && 
        <div className='w-100' 
            // style={{visibility: `${props.visible}`}}
        >
            <div className='d-flex flex-wrap w-100'>
                

                <Project pic={thresher} placeholder="Thresher project picture" 
                    title="Owlracle" 
                    intro = "An LLM AI chatbot which helped 1200+ Rice students to select courses and find school events with a user-friendly experience." 
                    url="https://www.owlracle.com/"
                    projectLogo = {
                        <div className='d-flex justify-content-center position-relative'>
                            <div className='signin-ball-wrapper'>
                                <div className='signin-ball signin-leftball'></div>
                                <div className='signin-ball signin-rightball'></div>
                                <div className='signin-ball signin-intersection-wrapper'>
                                    <div className='signin-ball signin-intersection bg-light'></div>
                                </div>
                                <div className='eyes eye-left bg-light'></div>
                                <div className='eyes eye-right bg-light'></div>
                            </div>
                        </div>
                    }
                    year = {2023}
                />
                
                <Project pic={thresher} placeholder="Thresher project picture" 
                    title="The Rice Thresher Special Project" 
                    intro = "Designed and built a website for an award-winning, student-run newspaper with 4000+ student readers." 
                    url="https://projects.ricethresher.org/"
                    projectLogo = {
                        <img src={thresherLogo} placeholder="Thresher project picture" className='w-100 mt-2 mb-3'/>
                    }
                    year = {2023}
                />

                <Project pic={nice} placeholder="NICE project picture" 
                    title="NICE Scheduler" 
                    intro = "A web app that helps Rice student select courses with AI assistance and great visual designs." 
                    url="https://riceschedule.com/"
                    projectLogo = {
                        <img src={niceLogo} placeholder="NICE project picture" className='w-100 mt-2 mb-3'/>
                    }
                    year = {2022}
                />
            </div>

           
        </div>}
    </div>
    )
}
