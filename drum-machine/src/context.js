import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import data from './data/data'

const defaultState = {
  powerOn: true,
  display: 'Power-Off',
  volume: 50
}

const AppContext = React.createContext()

export const Provider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSwitch = () => {
    dispatch({ type: 'SWITCH' })
  }

  const volumeChange = (value) => {
    dispatch({ type: 'VOLUME', payload: value })
  }

  const displayChange = (value) => {
    dispatch({ type: 'DISPLAY', payload: value })
  }

  const playAudio = (key) => {
    const { powerOn, volume } = state
    if (powerOn) {
      const soundToPlay = document.getElementById(key)
      soundToPlay.volume = volume / 100
      soundToPlay.play()
    }
  }

  const keyDownPlay = () => {
    const { powerOn } = state
    if (powerOn) {
      window.addEventListener('keypress', (e) => {
        const keyToPlay = `${e.key}`.toUpperCase()
        const audio = data.find(item => item.key === keyToPlay)
        if (audio) {
          playAudio(keyToPlay)
          displayChange(audio.audioName)
        }
      })
    }
  }

  const showDisplay = () => {
    const { display, powerOn } = state
    const screen = document.getElementById('display')
    if (powerOn) {
      screen.innerText = display
    }
    else {
      screen.innerText = 'Power-Off'
    }

  }

  useEffect(() => {
    showDisplay()
    keyDownPlay()
  }, [state])

  return (
    <AppContext.Provider
      value={{
        state,
        handleSwitch,
        playAudio,
        volumeChange,
        displayChange
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export default useGlobalContext