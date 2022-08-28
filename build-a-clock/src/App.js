import React from 'react'
import Break from './Break'
import Session from './Session'
import Timer from './Timer'

function App() {
  return (
    <div className="app 
    container
    ">
      <div className='row'>
        <h1 className='text-center'>25 + 5 Clock</h1>
      </div>
      <div className='row'>
        <Break />
        <Session />
      </div>
      <div className='row
      d-flex
      justify-content-center
      align-item-center
      flex-column
      w-50
      m-auto
      text-center
      '>
        <Timer />
      </div>
      <p className="lead text-center fs-5 mt-5">Coded by Neeraj Parmar</p>
    </div>
  );
}

export default App;
