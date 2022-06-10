import React,{ useState } from 'react';
import './App.css';



let adjestInterval = undefined;



const Stopwatch = () => {
     
  const [watch, setWatch] = useState(0)
  const [started, setStarted] = useState(false)

  const StartWatch = () => {
    adjestInterval = setInterval(() => {
      setWatch(x => x + 1);
      setStarted(true);
    }, 1000)
  }

  const StopWatch = () => {
    clearInterval(adjestInterval);
    setStarted(false);
  }

  const ResetWatch = () => {
    setWatch(0);
    clearInterval(adjestInterval);
    setStarted(false)
  }

    return (
        <div className='container-center'>
            <div className="App">
                <div className="center_div">

                    <h1 className='heading'>Start-Stop Counter</h1>

                    <h1 className='watchH1 heading'>{watch}</h1>

                    <button className='start' disabled={started} onClick={StartWatch}>Start</button>
                    <button className='stop' onClick={StopWatch}>Stop</button>
                    <button className='reset' onClick={ResetWatch}>Reset</button>

                </div>
            </div>
        </div>
    )
}

export default Stopwatch;


