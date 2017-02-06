import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './store';

function reducer (state=0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
    default:
      return state;
  }
}


const store = createStore(reducer);
store.dispatch({});

class Counter extends React.Component {
  // render a count, and two buttons, one that says 'ADD'
  //and one that says 'SUBTRACT'

  componentDidMount(){
    this.props.store.subscribe(this.forceUpdate.bind(this))
  }

  onAdd(){
    let action = {type: 'INCREMENT_COUNT'};
    console.log(action);
    this.props.store.dispatch(action);
  }

  render(){
    return(
      <div>
        <h1>{ this.props.store.getState() }</h1>
        <button onClick={this.onAdd.bind(this) }>Add</button>
        <button>Subtract</button>
      </div>
    )
  }
}


ReactDOM.render(<Counter store={store}/>, document.getElementById('container'));

// I want to tell my store what functions it should fire off
// when there is a change to state
store.subscribe( () => { console.log('Dogs') });
store.subscribe( () => { console.log('Cats') });

// Whenever there is a change in my state
// I want to have my store fire off some functions





// render it into the DOM
