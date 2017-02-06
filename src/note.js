import React from 'react'

export default class Note extends React.Component{

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

        <p> {this.props.noteStore.getState().join(", ")}</p>
    </div>
  )
  }
}
