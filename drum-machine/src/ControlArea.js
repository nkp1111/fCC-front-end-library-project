import React from 'react'
import useGlobalContext from './context'

function ControlArea() {

  return (
    <section id='control-section' className='d-flex justify-content-center
    align-items-center'>
      <form id='form'
        className='d-flex 
          flex-column 
          justify-content-around 
          align-items-center 
          p-4
          m-1
      '>
        <OnOffSwitch />
        <Display />
        <Volume />
      </form>
    </section>
  )
}

const OnOffSwitch = () => {
  const { handleSwitch, displayChange, state } = useGlobalContext()

  return (
    <>
      <label className="text-white 
              d-flex 
              justify-content-between 
              w-100"
        htmlFor='on-off'>POWER SWITCH
        <input className="form-check-input"
          type="checkbox"
          id="on-off"
          name='on-off'
          onChange={() => {
            handleSwitch()
            displayChange(`Power-${state.powerOn ? 'off' : 'On'}`)
          }
          }
          checked={state.powerOn} />
      </label>
    </>
  )
}

const Display = () => {
  return (
    <div id="display"
      className="text-center 
        text-danger 
        bg-light 
        p-3 
        m-3
        fs-6
        fw-bold
        w-100">Power-Off</div>
  )
}

const Volume = () => {
  const { state, volumeChange, displayChange } = useGlobalContext()
  return (
    <input
      id='volume'
      type="range"
      min="1"
      max="100"
      className='m-2
        w-100'
      value={state.volume}
      onChange={(e) => {
        volumeChange(e.target.value)
        displayChange(`Volume: ${e.target.value}`)
      }} />
  )
}
export default ControlArea
