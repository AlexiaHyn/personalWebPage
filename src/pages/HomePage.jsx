import React, { useRef, useState, useTransition } from 'react'
import { Scrollama, Step } from 'react-scrollama';
import Navbar from '../elements/Navbar'
import Home from '../elements/Home';
import Gallery from '../elements/Gallery';

export default function HomePage(props) {

  const [scrollHome,scrollProject]=props.refs;
  const navRefs = props.navRefs;

  const [, startTransition] = useTransition();

  const [visibles, setVisibles] = props.visibleControl;
  const [loads, setLoads] = useState(["visible", "hidden", "hidden", "hidden"]);

  const onStepEnter = ({ data }) => {
    loads[data] = false;
    setLoads([...loads]);
    startTransition(() => {
      visibles[data] = true;
      setVisibles([...visibles]);
      loads[data] = true;
      setLoads([...loads]);
    });
    navRefs[data].current.focus();
  };

  const onStepExit = ({ data }) => {
    console.log("exit " + data);
    visibles[data] = false;
    setVisibles([...visibles]);
  };


  return (
    <div className='bg-white full-page poppins'>
      {/* <Scrollama offset={1} onStepEnter={onStepEnter} onStepExit={onStepExit}>
        <Step data={0} key={0}>
          <div>
            {<Home myRef={scrollHome} load={loads[0]} visible = {visibles[0]}/>}
          </div>
        </Step>
        <Step data={1} key={1}>
          <div>
            {<Projects myRef={scrollProject} load={loads[1]} visible = {visibles[1]}/>}
          </div>
        </Step>
      </Scrollama> */}

      <div>
        {<Home myRef={scrollHome} load={loads[0]} visible = {visibles[0]}/>}
      </div>
    </div>
  )
}
