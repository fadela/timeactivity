let redux = require ('redux');

console.log('Starting with redux');

{/* pure functions
   1.same output with the same input
   2.no sideeffects ... they can not take variables on the
    global state and should not update any variable out side of it
   3. we want to avoid promises and asychronous calls
     your functions should be sychronous
*/}

let reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'}

  return state;
};
let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);