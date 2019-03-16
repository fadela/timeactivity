import React, { Component } from 'react';
class AddTodo extends Component {
    state = {  }
    onSubmit = (e) =>{
        e.preventDefault();
        let items = this.refs.item.value;

        if (items.length>0){
            this.props.onSetItem(items);
            this.refs.item.value = '';    
        } else {
            this.refs.item.focus();
        }
        

         
    }
    render() { 
        return ( <div>
            <form ref="form" onSubmit={this.onSubmit} className="Addtodo-form">
                <input type="text" className="form-control"  ref="item" placeholder="What do you want to do?"/>
                <button className="btn btn-outline-dark btn-block ">Add</button>
            </form>
        </div> );
    }
}
 
export default AddTodo;