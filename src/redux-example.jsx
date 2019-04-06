let redux = require ('redux');

console.log('Starting with redux');

{/* pure functions
   1.same output with the same input
   2.no sideeffects ... they can not take variables on the
    global state and should not update any variable out side of it
   3. we want to avoid promises and asychronous calls
     your functions should be sychronous
*/}
let stateDefault ={
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

let nextHobbyId= 1 ;
let nextMovieId= 1 ;

 {/*let oldReducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'}

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY' :
      return{
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      }  
    case 'REMOVE_HOBBY' : 
      return {
        ...state,
        hobbies: state.hobbies.filter( (hobby) => hobby.id !== action.id)
      }  
    case 'ADD_MOVIE'  :
      return{
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE' :
      return {
        ...state,
        movies: state.movies.filter( (movie) => movie.id !== action.id)
      }    
    default:
        return state;  
  }
};
*/}

let nameReducer = (state= 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME'  :
      return action.name;
    default :
      return state;  
  }
}

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



store.dispatch({
  type:'CHANGE_NAME',
  name: 'fadela'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

store.dispatch ({
  type: 'ADD_MOVIE',
  title: 'Jumanji',
  genre: 'Action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Friends',
  genre: 'Action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});





