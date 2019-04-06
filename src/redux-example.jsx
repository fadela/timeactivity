let redux = require ('redux');

console.log('Starting with redux');

{/* pure functions
   1.same output with the same input
   2.no sideeffects ... they can not take variables on the
    global state and should not update any variable out side of it
   3. we want to avoid promises and asychronous calls
     your functions should be sychronous
*/}

//Name reducer and action generator
//--------------------

let nameReducer = (state= 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME'  :
      return action.name;
    default :
      return state;  
  }
}

let changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}
//Hobbies reducer and action generator
//--------------------


let nextHobbyId= 1 ;
let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY' : 
     return  [
      ...state,
      {
        id: nextHobbyId++,
        hobby: action.hobby
      }
    ];
    case 'REMOVE_HOBBY' :
      return state.filter( (hobby) => hobby.id !== action.id)
    default: 
      return state
  }
}

let addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

let removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}


//Movies reducer and action generator
//--------------------


let nextMovieId= 1 ;
let moviesReducer = (state = [] ,action) => {
  switch (action.type) {
    case 'ADD_MOVIE' : 
     return  [
      ...state,
      {
        id: nextMovieId++,
        title: action.title,
        genre: action.genre
      }
    ]
    case 'REMOVE_MOVIE' : 
     return state.filter( (movie) => movie.id !== action.id)
    default :
      return state; 
  }
}

let addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
}

let removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}

//---------------------------

let reducer = redux.combineReducers({
  name: nameReducer ,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

let store = redux.createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Subscribe to changes
let unsubscribe =store.subscribe ( () => {
  let state = store.getState();

  console.log('Name is', state.name);
  console.log('New state', store.getState())
})
// unsubscribe();

let currentState = store.getState();
console.log('currentState', currentState);



store.dispatch(changeName('fadela'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2))

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Jumanji', 'Action'));
 
store.dispatch(addMovie('Star wars', 'Action'));

store.dispatch(removeMovie(1));





