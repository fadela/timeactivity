import React, { Component } from 'react';

class Counter extends Component {
     /*
state = { 
        value:this.props.value,
        tags: []
     };
     */
    

    /*  renderTags() {
         if (this.state.tags.length === 0) 
         return <p>There is no message</p>;
         
         return <ul>{this.state.tags.map( tag => <li key={tag} >{tag}</li>)} </ul>
     } */
    

     //constructor(){
     //    super();
     //    this.handleIncrement = this.handleIncrement.bind(this);
     //}
    
     //in the handle icrement we can not access the current obj so we use bimd method.

     // arrow functions don't rebind the this keyboard, they inherit
     /* 
     handleIncrement = () => {
         //here to update the we use the setState() method
         this.setState({ value: this.state.value +1});
     }*/
    


    render() {

        const { counter , onIncrement , onDelete} = this.props ;

        return ( 
            <div>
                <h4> Counter #{counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => onIncrement(counter)} className="btn btn-light btn-sm">Increment</button>
                {/*
                {this.state.tags.length === 0 && "Please create a new tag"}
                {this.renderTags()}
        */}

                <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
         );

    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "dark";
        return classes;
    }

    formatCount() {
         const {value} = this.props.counter;
         return value === 0 ? 'Zero' : value;
    }
     
}
 
export default Counter;