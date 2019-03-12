import React, { Component } from 'react';
import Timer from './Timer';
class Clock extends Component {
    
   
    formatSecounds(totalSeconds){
        var seconds = totalSeconds%60 ;
        var minutes = Math.floor(totalSeconds/60);

        if (seconds<10)
         seconds= '0' + seconds;

        if (minutes<10)
         minutes= '0' + minutes;

        return minutes + ':' + seconds; 
    }
    render() { 
        return ( 
            <div className="clock">
                <span className="clock-text">
                  {this.formatSecounds(this.props.totalSeconds)}
                </span>
            </div>
         );
    }
}
Clock.defaultProps = {
    totalSeconds: '0'
}
 
export default Clock;