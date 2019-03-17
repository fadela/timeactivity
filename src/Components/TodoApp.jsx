import React, { Component } from 'react';
import Nav from './Nav';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import  uuid from 'node-uuid'

class TodoApp extends Component {
    state = { 
        showCompleted: false,
        searchText:'',
        todos: [
           {id:uuid(), text:'walk the dog'},
           {id:uuid(), text:'Read the book'},
           {id:uuid(), text:'Learnig React'},
           {id:uuid(), text:'Painting with pastel'}
        ]
     };

     handleAddTodo = (text) =>{
        this.setState({
            todos : [
                ...this.state.todos,
                {
                    id:uuid(), 
                    text
                }
            ]
        });
     }

     handleSearch = (showCompleted, searchText) =>{
        this.setState({
            showCompleted,
            searchText
        })
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