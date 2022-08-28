import React from 'react'
import BtnContainer from './BtnContainer'
import ControlArea from './ControlArea'

function App() {
  return (
    <div className="App d-flex
    border
    border-3
    border-danger
    p-3
    bg-dark
    " id='drum-machine'>
      <BtnContainer />
      <ControlArea />
    </div>
  );
}

export default App;
