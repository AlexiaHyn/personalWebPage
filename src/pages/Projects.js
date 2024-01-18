import React, { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama';
import Project from '../elements/Project'
import ProjectRight from '../elements/Project-right';
import nice from "../media/images/nice.png"
import owlracle from "../media/images/owlracle.png";
import thresher from "../media/images/thresher.png";
import thresher2 from "../media/images/thresher2.png";
import niceLogo from "../media/images/NiceLogo.svg";
import thresherLogo from "../media/images/the-rice-thresher-logo.gif"
import ora from "../media/images/ora1.png";
import oraLogo from "../media/images/oraLogo.png"
import nebula1 from "../media/images/nebula2.png";
import nebula2 from "../media/images/nebula3.png";
import nebulaLogo from "../media/images/nebulaLogo.png";


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
                                title="AR app aiding firefighters" 
                                intro = "The award-winning AR app for environment detection and hand-gesture communication to aid firefighters." 
                                url="https://devpost.com/software/ora"
                                // navigatePage = {"/project-ora"}
                                projectLogo = {
                                    <img src={oraLogo} placeholder="Ora Logo" className='w-100 mt-2 mb-3'/>
                                }
                                load={loadProjects[0]}
                                circleBg="rgb(236, 100, 100)"
                                year = {2023}
                            />
                            }
                        </div>
                    </Step>
                    <Step data={1} key={1}>
                        <div className='w-100'>
                            {
                            <ProjectRight pic={owlracle} placeholder="Owlracle project picture" 
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
                                circleBg="rgb(169, 199, 201)"
                                year = {2023}
                            />
                            }
                        </div>
                    </Step>
                    <Step data={2} key={2}>
                        <div className='w-100'>
                            {<Project 
                                pic={thresher} 
                                pic2={thresher2}
                                circleBg="rgb(189, 88, 217)"
                                placeholder="Thresher project picture" 
                                title="Special Stories Project" 
                                intro = "Designed and built a website for an award-winning, student-run newspaper with 4000+ student readers." 
                                url="https://projects.ricethresher.org/"
                                projectLogo = {
                                    <img src={thresherLogo} placeholder="Thresher project picture" className='w-100 mt-2 mb-3'/>
                                }
                                year = {2022}
                                load={loadProjects[2]}
                            />}
                        </div>
                    </Step>
                    <Step data={3} key={3}>
                        <div className='w-100'>
                            {<ProjectRight 
                                pic={nebula1} 
                                pic2={nebula2}
                                circleBg="#6fdbfd"
                                placeholder="Nebula project picture" 
                                title="2D, RPG game built with Godot" 
                                intro = "A 2D RPG game which received 100+ positive feedback in the engaging UI design." 
                                url="https://youtu.be/UZAZGZRIZkk?si=ajlMsdpdRTLVvEnX"
                                projectLogo = {
                                    <img src={nebulaLogo} placeholder="Nebula Logo" className='w-100 mt-2 mb-3'/>
                                }
                                year = {2022}
                                load={loadProjects[3]}
                            />}
                        </div>
                    </Step>
                    
                </Scrollama>
                
            </div>
            
           
        </div>
    </div>
    )
}
