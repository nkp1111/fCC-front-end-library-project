import React from 'react'
import data from './data/data'
import SingleBtn from './SingleBtn'

const BtnContainer = () => {

  return (
    <section id='btn-section'>
      <div className='row row-cols-3'>
        {data.map((item) => {
          return (
            <SingleBtn item={item} key={item.id} />
          )
        })}
      </div>
    </section>
  )
}

export default BtnContainer