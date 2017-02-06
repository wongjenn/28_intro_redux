export default function notesReducer(state=[], action){
  if (action.type === 'ADD_NOTE') {
    return [...state, action.note ]
  } else {
    return state
  }
}
