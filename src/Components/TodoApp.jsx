import React, { Component } from 'react';
import Nav from './Nav';
import TodoList from './TodoList';

class TodoApp extends Component {
    state = { 
        todos: [
           {id:1, text:'walk the dog'},
           {id:2, text:'Read the book'},
           {id:3, text:'Learnig React'},
           {id:4, text:'Painting with pastel'}
        ]
     };
    render() { 
        let {todos} = this.state;

        return ( <div>
            <Nav/>
            <TodoList todos={todos}/>
        </div> );
    }
}
 
export default TodoApp;