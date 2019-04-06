import React, { Component } from 'react';
class Controls extends Component {
    state = { 
        
     }
     onStatuschange (newStatus){
        return () =>{
            this.props.onStatusChange(newStatus);
        }
     }
     renderStartStopsButton = () =>{
        if(this.props.countdownStatus === 'started') {
            return <button type="button" class="btn-sm btn-outline-warning" onClick={this.onStatuschange('paused')}>Pause</button>
        } else if (this.props.countdownStatus !=='started') {
            return <button type="button" class="btn-sm btn-outline-info" onClick={this.onStatuschange('started')}>start</button>
        }
    }
   
    render() { 
    
        return ( <div className="controls">
            {this.renderStartStopsButton()}
            <button type="button" class="btn-sm btn-outline-danger "onClick={this.onStatuschange('stopped')}>clear</button>
        </div> );
    }
}
 
export default Controls;