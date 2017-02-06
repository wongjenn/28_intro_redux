import React from 'react'

export default class Counter extends React.Component {

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
