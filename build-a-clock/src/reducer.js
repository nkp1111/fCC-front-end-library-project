const reducer = (state, action) => {
  if (action.type === 'MINUTE') {
    return { ...state, minutes: state.session }
  }
  if (action.type === 'START-STOP') {
    return { ...state, start: !action.payload }
  }
  if (action.type === 'RESET') {
    return { ...state, start: false, break: 5, session: 25, transition: false, minutes: 25, seconds: 0 }
  }
  if (action.type === 'INCREMENT') {
    if (action.payload === 'break' && state.break < 60) {
      return { ...state, break: state.break + 1 }
    }
    if (action.payload === 'session' && state.session < 60) {
      return { ...state, session: state.session + 1, minutes: state.session + 1 }
    }
    else {
      return state
    }
  }
  if (action.type === 'DECREMENT') {
    if (action.payload === 'break' && state.break > 1) {
      return { ...state, break: state.break - 1 }
    }
    if (action.payload === 'session' && state.session > 1) {
      return { ...state, session: state.session - 1, minutes: state.session - 1 }
    }
    else {
      return state
    }
  }
  if (action.type === 'TIME') {
    if (state.seconds === 0) {
      return {
        ...state, minutes: state.minutes - 1
        , seconds: 59
      }
    }
    else {
      return { ...state, seconds: state.seconds - 1 }
    }

  }
  if (action.type === 'TRANSITION') {
    // since state transition has just changed 
    // state.transition value is still the old one
    // pay attention to minutes change
    return {
      ...state,
      transition: !state.transition,
      minutes: state.transition
        ? state.session
        : state.break,
      seconds: 0
    }
  }
  throw new Error('action type not defined')
}

export default reducer