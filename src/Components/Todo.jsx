import React, { Component } from 'react';
class Todo extends Component {
    state = {  }
    render() { 
        let {id, text} = this.props;
       
        return ( <div>
            {id}. {text}
        </div> );
    }
}
 
export default Todo;