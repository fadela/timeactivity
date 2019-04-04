var redux = require('redux');

console.log('starting the redux todo axample');
var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};
var reducer = (state = stateDefault, action) => {
        switch(action.type) {
                case 'CHANGE_SEARCH_TEXT':
                  return {
                    ...state,
                    searchText: action.searchText     
                  }
                 default:
                  return state;     
           }
}

let store = redux.createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Subscribe to changes
store.subscribe ( () => {
   let state = store.getState();
   console.log('searchText is :', state.searchText);

});

let currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
        type: 'CHANGE_SEARCH_TEXT',
        searchText: 'coding'
})
