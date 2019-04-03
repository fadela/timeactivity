import React, { Component } from 'react';
import  uuid from 'node-uuid'

import Nav from './Nav';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from '../api/TodoAPI'


class TodoApp extends Component {
    state = { 
        showCompleted: false,
        searchText:'',
        todos: TodoAPI.getTodos()
     };
     componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus){
            this.setState({
                todos: TodoAPI.setTodos(this.state.todos)
            })
        }
     }
     
     handleAddTodo = (text) =>{
        this.setState({
            todos : [
                ...this.state.todos,
                {
                    id:uuid(), 
                    text,
                    completed:false
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

     handleToggle = (id) => {
        let updatedTodos = this.state.todos.map((todo) =>{
            if (todo.id ===id) {
                todo.completed =! todo.completed;
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
     }
    render() { 
        
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

        return ( <div>
            <Nav/>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <AddTodo onSetItem={this.handleAddTodo}/>
        </div> );
    }
}
 
export default TodoApp;