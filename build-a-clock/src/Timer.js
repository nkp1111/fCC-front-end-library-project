import React from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import { BsArrowClockwise } from 'react-icons/bs'
import useGlobalContext from './context'

const Timer = () => {

  const beepRef = React.useRef(null)

  const { state, startOrStop, resetSession, checkNum } = useGlobalContext()
  const { start, minutes, seconds, transition } = state

  const newMinutes = checkNum(minutes)
  const newSeconds = checkNum(seconds)
  return (
    <>
      <div className={`session
      d-flex
      flex-column
      justify-content-center
      align-items-center
      p-2
      ${minutes === 0 && 'text-danger'}`}>
        <p id='timer-label'
          className='fs-1 m-0'>{transition ? 'Break' : 'Session'}</p>
        <p id='time-left'>{newMinutes}:{newSeconds}</p>
        <audio id='beep' src='https://github.com/nkp1111/drum-machine/blob/main/src/data/mixkit-musical-flute-alert-2308.wav?raw=true'
          ref={beepRef}></audio>
      </div>
      <div className='d-flex justify-content-evenly 
      '>
        <button id='start_stop'
          className='btn'
          onClick={() => startOrStop(start)}>
          {start
            ? <FaPause className='fs-4' />
            : <FaPlay className='fs-4' />}

        </button>
        <button id='reset'
          className='btn'
          onClick={() => {
            const beep = beepRef.current
            beep.pause()
            beep.currentTime = 0
            resetSession()
          }}>
          <BsArrowClockwise className='fs-3' />
        </button>
      </div>
    </>
  )
}

export default Timer