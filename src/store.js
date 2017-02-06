function createStore( reducer ){
  const store = {}
  let state // initial value of state is hardcoded
  let listeners = []

  store.getState = function(){
    return state
  }

  store.dispatch = function( action ){
    // how the state is updated is hard coded
    // if (action.type === 'INCREMENT_COUNT') {
    //   state = state + 1
    // } else if (action.type === 'DECREMENT_COUNT') {
    //   state = state - 1
    // }

    state = reducer(state, action)

    listeners.forEach(function(listener){
      listener()
    })
  }

  store.subscribe = function(listener){
    listeners.push( listener )
  }

  store.dispatch({})
  return store
}

export default createStore
