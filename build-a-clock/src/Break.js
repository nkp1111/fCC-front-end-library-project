import React from 'react'
import { HiArrowDown, HiArrowUp } from 'react-icons/hi'
import useGlobalContext from './context'

const Break = () => {
  const { state, incrementIt, decrementIt } = useGlobalContext()
  return (
    <div className='section col'>
      <div id='break-label' className='row' >
        Break length
      </div>
      <div className='row'>
        <div className='col'></div>
        <div
          className='col'>
          <button id='break-decrement'
            className='btn'
            onClick={() => decrementIt('break')}
          >
            <HiArrowDown className='fs-3' /></button>
        </div>
        <div id='break-length' className='col'>{state.break}</div>
        <div
          className='col'>
          <button id='break-increment'
            className='btn'
            onClick={() => incrementIt('break')}
          >
            <HiArrowUp className='fs-3' /></button>
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default Break
