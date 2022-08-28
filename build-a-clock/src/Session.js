import React from 'react'
import { HiArrowDown, HiArrowUp } from 'react-icons/hi'
import useGlobalContext from './context'

const Session = () => {

  const { state, decrementIt, incrementIt } = useGlobalContext()
  return (
    <div className='section col'>
      <div id='session-label' className='row' >
        Session length
      </div>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <button id='session-decrement'
            className='btn'
            onClick={() => decrementIt('session')}>
            <HiArrowDown className='fs-3' />
          </button>
        </div>
        <div id='session-length' className='col'>{state.session}</div>
        <div className='col'>
          <button id='session-increment'
            className='btn'
            onClick={() => incrementIt('session')}>
            <HiArrowUp className='fs-3' />
          </button>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default Session