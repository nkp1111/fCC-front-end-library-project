const reducer = (state, action) => {
  if (action.type === 'SWITCH') {
    return { ...state, powerOn: !state.powerOn }
  }
  if (action.type === 'VOLUME') {
    return { ...state, volume: action.payload }
  }
  if (action.type === 'DISPLAY') {
    return { ...state, display: action.payload }
  }
  throw new Error('action type not stated')
}

export default reducer