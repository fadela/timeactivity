import React, { Component } from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class TodoApp extends Component {
    state = { 
        todos: [
           {id:1, text:'walk the dog'},
           {id:2, text:'Read the book'},
           {id:3, text:'Learnig React'},
           {id:4, text:'Painting with pastel'}
        ]
     };

     handleAddTodo(text) {
        alert('new todo :' + text);
     }
    render() { 
        let {todos} = this.state;

        return ( <div>
            <Nav/>
            <TodoList todos={todos}/>
            <AddTodo onSetItem={this.handleAddTodo}/>
        </div> );
    }
}
 
export default TodoApp;