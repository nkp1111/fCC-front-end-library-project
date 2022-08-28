import React from 'react'
import useGlobalContext from './context'

/* Display Section show input value and calculation */
const Display = () => {
  return (
    <div id='display-section'
      className='
      text-white
      p-2
      row
      border
      border-dark
      border-5
      '>
      <Input />
      <Result />
    </div>
  )
}

const Input = () => {
  const { value } = useGlobalContext()
  return (
    <div id='display'
      className='
      fs-4
    col-12
    text-warning
    '>
      {value ? value : 0}
    </div>
  )
}

const Result = () => {
  const { result } = useGlobalContext()
  return (
    <div className='
    fs-3
    col-12
    p-1
    overflow-hidden
    '>
      {result ? result : 0}
    </div>
  )
}
export default Display
