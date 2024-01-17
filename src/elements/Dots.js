import React, { useEffect, useState } from 'react'

export default function Dots() {
    const rowNum = 9;
    const colNum = 26;

    const [sizes, setSize] = useState([]);
    const [sizeRange, setSizeRange] = useState(2);
    const [pattern, setPattern] = useState(<></>);
    const [loaded, setLoaded] = useState(false);

    const [leaveTrail, setLeaveTrail] = useState(true);

  

    function handleHover(idx, rowIdx) {
        let [traceSizeRange, traceIdxRange] = findRangeIdx(idx, sizeRange, rowIdx);
        
        const sizesChange = sizes.map((s, i) => {
            for (let j = 0; j < sizeRange; j++) {
                if (traceIdxRange[j].includes(i)){
                    return traceSizeRange[j];
                }
            }
            
            // if (i === idx) {
            //   // Increment the clicked counter
            //   return 0.3;
            // } 
            // else {
            //   // The rest haven't changed
            //   if (leaveTrail) {
            //     return s
            //   } else {
            //     return 1;
            //   }
            // }

            if (leaveTrail) {
                return s
              } else {
                return 1;
              }
          });
          setSize(sizesChange);
    }

    function reset(e){
        e.preventDefault();
        initialize();
    }

    useEffect(()=>{
        initialize();
    }, [])

    useEffect(()=>{
        // number of rows is doubled
        if (sizes.length > 0) {
            setLoaded(true);
        }

        if (loaded) {
            setPattern(getDots(rowNum, colNum));
        }
    }, [sizes, loaded])

    function initialize() {
        setSize([]);
        sizes.length = rowNum * colNum;
        sizes.fill(1);
        setSize([...sizes]);
    }

    function findRangeIdx(idx, range, rowIdx) {
        const d = (1 - 0.3) / range
        let traceSizeRange = Array.from({length: range}, (_, i) => 0.3 + d * i);

        let traceIdxRange = [];
        traceIdxRange.length = range;
        traceIdxRange.fill([]);
        traceIdxRange[0] = [idx];

        //up
        let i = idx - colNum;
        let count = 0;
        while (i >= 0 && i < rowNum * colNum) {
            if (count >= range - 1) {
                break;
            }
            traceIdxRange[count + 1].push(i);
            i = i - colNum;
            count ++;
        }

        //down
        i = idx + colNum;
        count = 0;
        while (i >= 0 && i < rowNum * colNum) {
            if (count >= range - 1) {
                break;
            }
            traceIdxRange[count + 1].push(i);
            i = i + colNum;
            count ++;
        }

        //left
        i = idx - 1;
        count = 0;
        while (i >= rowIdx*colNum && i < (rowIdx + 1) * colNum) {
            if (count >= range - 1) {
                break;
            }
            traceIdxRange[count + 1].push(i);
            i = i - 1;
            count ++;
        }

        //right
        i = idx + 1;
        count = 0;
        while (i >= rowIdx*colNum && i < (rowIdx + 1) * colNum) {
            if (count >= range - 1) {
                break;
            }
            traceIdxRange[count + 1].push(i);
            i = i + 1;
            count ++;
        }

        return [traceSizeRange, traceIdxRange];
    }
    
    
    function getDots(rowNum, colNum){
        var row = []
        row.length = rowNum;
        row.fill(0);

        return (<div>
            {
                row.map((val, idx)=>{
                    return (
                        <div key={idx}>
                            {getRow(colNum, idx)}
                        </div>
                    )
                })
            }
        </div>)
    }

    function getRow(colNum, rowIdx) {
        var column = []
        column.length = colNum;
        column.fill(0);

        return (
            <div className='d-flex'>
                {
                    column.map((val, idx)=>{
                        return(<div key={idx} className='dot' 
                        onMouseOver={()=>{handleHover(rowIdx*colNum + idx, rowIdx)}}
                        style={{transform: `scale(${sizes[rowIdx*colNum + idx]})`,
                            opacity: `${sizes[rowIdx*colNum + idx]}`
                        }}
                        >
                        </div>)
                    })
                }
            </div>
        )
        
    }
  return (
    <div className='poppins w-100 px-0 px-lg-5 mx-0 mx-lg-5'>
        <div className='d-flex w-100 justify-content-between'>
            <div className='d-flex flex-column p-2 justify-content-center'>
                <div className='d-flex'>
                    <label className="form-check-label me-2" htmlFor="flexSwitchCheckDefault">Leave Trace</label>
                    <div className="form-check form-switch me-3">
                        
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" 
                            checked={leaveTrail} onChange={()=>setLeaveTrail(!leaveTrail)}/>
                    </div>
                </div>
                <div className='d-flex' style={{maxWidth: "400px"}}>
                    <label htmlFor="customRange3" className="form-label" style={{minWidth: "130px"}}>Trace Range:</label>
                    <input type="range" className="form-range" min="1" max="3" step="1" id="customRange3"
                        value={sizeRange} onChange={(e)=>setSizeRange(e.target.value)}
                    ></input>
                    <label htmlFor="customRange3" className="form-label ms-2" style={{minWidth: "130px"}}>{sizeRange}</label>
                </div>
                <div>
                    <button className='btn btn-outline-dark btn-sm' onClick={(e)=>reset(e)}>Reset</button>
                </div>
                
            </div>
            <div>
                <h2>Iteractive Dots</h2>
                <div>Play with ME with mouse hover</div>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            {pattern}
        </div>
        
    </div>
  )
}
