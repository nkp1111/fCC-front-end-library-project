import React from 'react'
import useGlobalContext from './context'

function SingleBtn({ item }) {

  const { key, audio, audioName } = item
  const { playAudio, displayChange } = useGlobalContext()

  return (
    <div className='col btn-container'>
      <button id={audioName}
        className='
        drum-pad
        btn 
        btn-danger 
        m-2
        p-1
        fs-3
        w-100'
        onClick={() => {
          playAudio(key)
          displayChange(audioName)
        }}>{key}
        <audio src={audio} className='clip' id={key}></audio>
      </button>
    </div>
  )
}

export default SingleBtn
