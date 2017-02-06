export default function countReducer (state=0, action){
  if (action.type === 'INCREMENT_COUNT') {
    return state + 1
  } else if (action.type === 'DECREMENT_COUNT') {
    return state - 1
  } else {
    return state
  }
}
