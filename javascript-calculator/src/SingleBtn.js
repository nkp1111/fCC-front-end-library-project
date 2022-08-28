import React from 'react'
import useGlobalContext from './context'

const SingleBtn = ({ prop }) => {
  const { id, text, key } = prop
  const { handleDisplay } = useGlobalContext()

  const widthAdjust = [0, 10]  //  key reference
  const fsAdjust = ['equals', 'multiply', 'divide', 'subtract', 'add']  // id reference

  return (
    <div className={widthAdjust.includes(key)
      ? 'col-6 p-0 '
      : 'col p-0'}>
      <button id={id}
        className={fsAdjust.includes(id)
          ? 'fs-2 p-2 w-100 bg-secondary text-white btns'   // btns for styling from css file
          : 'fs-3 p-2 w-100 h-100 bg-secondary opacity-75 text-white btns'}
        onClick={() => { handleDisplay(text) }}>{text}</button>
    </div>
  )
}

export default SingleBtn