import React from 'react'
import ReactDOM from 'react-dom'

import  { createStore }  from 'redux'
import countReducer from './countReducer'
import notesReducer from './notesReducer'
import Counter from './counter'
import Note from './note'

const store = createStore( countReducer )
const noteStore = createStore( notesReducer )
// debugger

// noteStore.dispatch({type: 'ADD_NOTE', note: 'Buy Milk'})

// debugger
// DEMO PURPOSES ONLY - WE'RE SUBSCRIBING TO AN EVENT RIGHT AWAY
// store.subscribe(function(){
//   console.log('Beef')
// })

// store.subscribe(() => console.log('Yay!'))

function App (props) {
  return (
    <div>
    <h1>My Cool App!</h1>
    < Counter store={props.store}/>
    < Note noteStore={props.noteStore}/>
  </div>)
}



ReactDOM.render(< App store={store} noteStore={noteStore}/>, document.getElementById('container'))
