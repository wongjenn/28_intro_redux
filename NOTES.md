## Redux

1. Created by Dan Abramov to help us manage state
  + When we talk about state - application level state - components may have component level state, but we want to think bigger
  + Different pieces
    + store - holds all of our state
      + any time state is changed, fire off any listeners
      + compare this to setState
    + actions
      + POJO with a type
    + reducers
      + 'reduce' two arguments to one - take the current state and the action and figure out the new state - pure function



+ Supposed to be good
+ Uses pure functions
+ Lightweight
+ Scalability
+ Information Flow - bi-directional...
  + Data flows down...
  + Actions flow up...
  + Compartmentalizing diffrent behaviors
+ Takes in a state - returns a whole new state
  + pure functions
  + returns copies of state
  + keep track of previous states
+ Immutability
  + We want to be very careful about how we change our state
+ Keeping track of our application state in our object
+ Store ????
+ Dispatcher ???
+ Actions ????
+ Reducers ???

+ How does the dispatcher fit into the design of Redux?

CHALLENGE:

+ Add the functionality so that when a user clicks the 'Subtract' button, our state decrements and the view re-renders.
+ Add a button that says "RESET" - this should set the state back to zero and again re-render.
