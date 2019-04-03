import React, { Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
    state = {  }

    renderTodos = () => {
        let {todos} = this.props;
        return todos.map((todo) => {
            return (
                <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
            )
        })
    }
    render() { 
        return ( <div>
            {this.renderTodos()}
        </div> );
    }
}
 
export default TodoList;