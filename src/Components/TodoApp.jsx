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
           {id:uuid(), text:'walk the dog', completed:false },
           {id:uuid(), text:'Read the book', completed:true},
           {id:uuid(), text:'Learnig React', completed:true},
           {id:uuid(), text:'Painting with pastel', completed:false}
        ]
     };

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
        let {todos} = this.state;

        return ( <div>
            <Nav/>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos} onToggle={this.handleToggle}/>
            <AddTodo onSetItem={this.handleAddTodo}/>
        </div> );
    }
}
 
export default TodoApp;