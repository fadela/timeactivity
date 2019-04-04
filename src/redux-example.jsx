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

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
        return state;  
  }
  return state;
};
let store = redux.createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Subscribe to changes
let unsubscribe =store.subscribe ( () => {
  let state = store.getState();

  console.log('Name is', state.name)
})
let currentState = store.getState();
console.log('currentState', currentState);

// unsubscribe();

store.dispatch({
  type:'CHANGE_NAME',
  name: 'fadela'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});



