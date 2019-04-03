var redux = require('redux');

console.log('starting the redux todo axample');
var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};
var reducer = (state = stateDefault, action) => {
        return state;
}

let store = redux.createStore(reducer);

let currentState = store.getState();
console.log('currentState', currentState);
