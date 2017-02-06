import React from 'react'
import ReactDOM from 'react-dom'

import  { createStore }  from 'redux'
import countReducer from './countReducer'
import notesReducer from './notesReducer'

const store = createStore( countReducer )
const noteStore = createStore( notesReducer )

noteStore.dispatch({type: 'ADD_NOTE', note: 'Buy Milk'})

debugger
// DEMO PURPOSES ONLY - WE'RE SUBSCRIBING TO AN EVENT RIGHT AWAY
store.subscribe(function(){
  console.log('Beef')
})

store.subscribe(() => console.log('Yay!'))

function App (props) {
  return (
    <div>
    <h1>My Cool App!</h1>
    < Counter store={props.store} />
  </div>)
}

class Counter extends React.Component {


  componentDidMount(){
    console.log("Component Mounted!!!")
    this.props.store.subscribe( this.forceUpdate.bind(this) )
  }

  handleIncrement(){
    this.props.store.dispatch({type: 'INCREMENT_COUNT' })
    console.log(this.props.store.getState())
  }

  render(){
    return (
      <div>
        <h1>{ this.props.store.getState() }</h1>
        <button onClick={this.handleIncrement.bind(this)}>Increment Count</button>
      </div>
    )
  }
}

ReactDOM.render(< App store={store} />, document.getElementById('container'))
