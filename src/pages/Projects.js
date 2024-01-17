import React, { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama';
import Project from '../elements/Project'
import nice from "../media/images/nice.png"
import owlracle from "../media/images/owlracle.png";
import thresher from "../media/images/thresher.png"
import niceLogo from "../media/images/NiceLogo.svg";
import thresherLogo from "../media/images/the-rice-thresher-logo.gif"
import ora from "../media/images/ora1.png";
import Dots from '../elements/Dots';
import Nebula from '../media/videos/Nebula';

export default function Projects(props) {
    const [loadProjects, setLoads] = useState([false, false, false, false]);
    const onStepEnter = ({ data }) => {
        loadProjects[data] = true;
        setLoads([...loadProjects]);
      };
    return (
    <div className='w-100 m-0'>
        <div className='w-100'
        >
            <div className='d-flex flex-wrap w-100'>
                
                {/* <div className='d-flex w-100 justify-content-center mt-5 pt-3'>
                    <Dots/>
                </div> */}

                <Scrollama offset={0.75} onStepEnter={onStepEnter}>
                    <Step data={0} key={0}>
                        <div className='w-100'>
                            {
                            <Project pic={ora} 
                                placeholder="ORA project picture" 
                                title="ORA" 
                                intro = "The award-winning AR app for environment detection and hand-gesture communication to aid firefighters." 
                                url="https://devpost.com/software/ora"
                                projectLogo = {
                                    <></>
                                }
                                load={loadProjects[0]}
                                year = {2023}
                            />
                            }
                        </div>
                    </Step>
                    <Step data={1} key={1}>
                        <div className='w-100'>
                            {
                            <Project pic={owlracle} placeholder="Owlracle project picture" 
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
                                load={loadProjects[1]}
                                year = {2023}
                            />
                            }
                        </div>
                    </Step>
                    <Step data={2} key={2}>
                        <div className='w-100'>
                            {<Project pic={thresher} placeholder="Thresher project picture" 
                                title="The Rice Thresher Special Project" 
                                intro = "Designed and built a website for an award-winning, student-run newspaper with 4000+ student readers." 
                                url="https://projects.ricethresher.org/"
                                projectLogo = {
                                    <img src={thresherLogo} placeholder="Thresher project picture" className='w-100 mt-2 mb-3'/>
                                }
                                year = {2023}
                                load={loadProjects[2]}
                            />}
                        </div>
                    </Step>
                    {/* <Step data={3} key={3}>
                        <div className='w-100'>
                            {<Project pic={thresher} placeholder="Thresher project picture" 
                                title="The Rice Thresher Special Project" 
                                intro = "Designed and built a website for an award-winning, student-run newspaper with 4000+ student readers." 
                                url="https://projects.ricethresher.org/"
                                projectLogo = {
                                    <img src={thresherLogo} placeholder="Thresher project picture" className='w-100 mt-2 mb-3'/>
                                }
                                year = {2023}
                                load={loadProjects[3]}
                            />}
                        </div>
                    </Step> */}
                    
                </Scrollama>
                
            </div>
            
           
        </div>
    </div>
    )
}
