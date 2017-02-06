import React from 'react'
import ReactDOM from 'react-dom'

import  { createStore }  from 'redux'
import countReducer from './countReducer'
import notesReducer from './notesReducer'
// import Counter from './counter'

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

class Counter extends React.Component {

  componentDidMount(){
    // console.log("Component Mounted!!!")
    this.props.store.subscribe( this.forceUpdate.bind(this) )
  }

  handleIncrement(){
    this.props.store.dispatch({type: 'INCREMENT_COUNT' })
    console.log(this.props.store.getState())
  }

  handleDecrement(){
    this.props.store.dispatch({type: 'DECREMENT_COUNT' })
    console.log(this.props.store.getState())
  }

  render(){
    return (
      <div>
        <h1>{ this.props.store.getState() }</h1>
        <button onClick={this.handleIncrement.bind(this)}>Increment Count</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement Count</button>
      </div>
    )
  }
}

class Note extends React.Component{

  componentDidMount(){
    this.props.noteStore.subscribe( this.forceUpdate.bind(this) )
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.noteStore.dispatch({type: 'ADD_NOTE', note: event.target.children[0].value})
    event.target.children[0].value = ""
  }

  render(){
    return (
      <div>
        <h1> Add a Note: </h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" />
          <input type="submit" value="Submit"/>
        </form>

        <p> {this.props.noteStore.getState()}</p>
    </div>
  )
  }
}


ReactDOM.render(< App store={store} noteStore={noteStore}/>, document.getElementById('container'))
