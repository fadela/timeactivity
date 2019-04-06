import React, { Component } from 'react';
import Timer from './Timer'
import Countdown from './Countdown';
class Todo extends Component {
    state = {  }
    render() { 
        let {id, text, completed} = this.props;
       
        return ( 
        <div onClick={() => {
            this.props.onToggle(id);
        }}>
            <input type="checkbox" checked={completed}/>
            {text}
            <div className="card" >
              <div class="card-body">
               <h5 class="card-title">{text}</h5>
               <Timer/>
              </div>  
            </div>
           
        </div> );
    }
}
 
export default Todo;