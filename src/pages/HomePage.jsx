import React, { useRef, useState, useTransition } from 'react'
import { Scrollama, Step } from 'react-scrollama';
import Navbar from '../elements/Navbar'
import Home from '../elements/Home';
import Gallery from '../elements/Gallery';
import Projects from '../elements/Projects';
import Contact from '../elements/Contact';

export default function HomePage() {
  const scrollHome = useRef(null);
  const scrollGallery = useRef(null);
  const scrollProject = useRef(null);
  const scrollContact = useRef(null);
  const refs=[scrollHome, scrollGallery, scrollProject, scrollContact];

  const [, startTransition] = useTransition();

  const [visibles, setVisibles] = useState([true, false, false, false])
  const [loads, setLoads] = useState(["visible", "hidden", "hidden", "hidden"]);

  const onStepEnter = ({ data }) => {
    loads[data] = false;
    setLoads([...loads]);
    startTransition(() => {
      visibles[data] = "visible";
    setVisibles([...visibles]);
      loads[data] = true;
      setLoads([...loads]);
    });
  };

  const onStepExit = ({ data }) => {
    console.log("exit")
    visibles[data] = "hidden";
    setVisibles([...visibles]);
  };


  return (
    <div className='bg-black full-page poppins'>
      <Navbar refs={refs} visibles={visibles}/>
      
      <Scrollama offset={0.8} onStepEnter={onStepEnter} onStepExit={onStepExit} debug>
        <Step data={0} key={0}>
          <div>
            {<Home myRef={scrollHome} load={loads[0]} visible = {visibles[0]}/>}
          </div>
        </Step>
        <Step data={1} key={1}>
          <div>
            {<Gallery myRef={scrollGallery} load={loads[1]} visible = {visibles[1]}/>}
          </div>
        </Step>
        <Step data={2} key={2}>
          <div>
            {<Projects myRef={scrollProject} load={loads[2]} visible = {visibles[2]}/>}
          </div>
        </Step>
        <Step data={3} key={3}>
          <div>
            {<Contact myRef={scrollContact} load={loads[3]} visible = {visibles[3]}/>}
          </div>
        </Step>
      </Scrollama>
        
    </div>
  )
}
