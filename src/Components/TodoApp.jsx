import React, { Component } from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
    state = { 
        showCompleted: false,
        searchText:'',
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

     handleSearch = (showCompleted, searchText) =>{
        this.setState({
            showCompleted,
            searchText
        })
        console.log(showCompleted, searchText)
     }
    render() { 
        let {todos} = this.state;

        return ( <div>
            <Nav/>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onSetItem={this.handleAddTodo}/>
        </div> );
    }
}
 
export default TodoApp;