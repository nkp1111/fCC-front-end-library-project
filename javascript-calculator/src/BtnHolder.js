import React from 'react'
import useGlobalContext from './context'
import SingleBtn from './SingleBtn'

/* Button holder to hold various button */
const BtnHolder = () => {
  const { btn } = useGlobalContext()
  return (
    <div className='
          border
          border-5
          border-dark
          bg-dark
          row
          row-cols-4
          '>
      {btn.map(item => {
        return (
          <SingleBtn prop={item} key={item.key} />
        )
      })}
    </div>
  )
}

export default BtnHolder
