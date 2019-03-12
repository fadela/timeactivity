import React, { Component } from 'react';
class CountdownForm extends Component {
    state = { 
       
     }

    onSubmit = (e) => {
        e.preventDefault();
        let strSeconds = this.refs.seconds.value ;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value= '';
            this.props.onSetCountdown(strSeconds);
        }
    }

    render() { 
        return ( <div>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                <input type="text" className="form-control"  ref="seconds" placeholder="Enter times in seconds"/>
                
                <button className="btn btn-outline-dark btn-block ">Start</button>
            </form>
        </div> );
    }
}
 
export default CountdownForm;