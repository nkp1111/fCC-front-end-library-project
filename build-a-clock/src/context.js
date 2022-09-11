import React, { useEffect } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  break: 5,
  session: 25,
  minutes: 1,
  seconds: 0,
  start: false,
  transition: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const startOrStop = (val) => {
    dispatch({ type: 'START-STOP', payload: val })
  }
  const resetSession = () => {
    dispatch({ type: 'RESET' })
  }
  const incrementIt = (val) => {
    dispatch({ type: 'INCREMENT', payload: val })
  }
  const decrementIt = (val) => {
    dispatch({ type: 'DECREMENT', payload: val })
  }
  const checkNum = (val) => {
    return (val < 10 ? '0' + val : val)
  }
  const handleTimer = () => {
    dispatch({ type: 'TIME' })
  }
  const handleTransition = () => {
    dispatch({ type: 'TRANSITION' })
  }

  React.useEffect(() => {
    let interval
    if (state.start) {
      interval = setInterval(() => {
        handleTimer()
      }, 1000)
    }
    if (state.minutes === 0 && state.seconds === 0) {
      handleTransition()
      document.getElementById('beep').play()
    }

    return () => {
      clearInterval(interval)
    }
  }, [state])

  useEffect(() => {
    dispatch({ type: 'MINUTE' })
  }, [])

  return (
    <AppContext.Provider
      value={{
        state,
        startOrStop,
        resetSession,
        incrementIt,
        decrementIt,
        checkNum,
        handleTransition,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return React.useContext(AppContext)
}

export { AppProvider }
export default useGlobalContext