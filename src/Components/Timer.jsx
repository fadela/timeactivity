import React, { Component } from 'react';
import Nav from './Nav';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
    state= {
        count:0,
        countdownStatus: 'stopped'
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.countdownStatus !== prevState.countdownStatus){
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count:0});
                case 'paused' :
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break ;

            }
        }
    }
    startTimer(){
        this.timer = setInterval( () => {
            var newCount = this.state.count +1 ;
            this.setState({count: newCount})
        },1000)
    }

    handleStatusChange = (newStaus) => {
        this.setState({countdownStatus : newStaus});
    }
    render() { 
        return ( 
            <div>
                
                <Clock totalSeconds={this.state.count}/>
                <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>
            </div>
         );
        
    }
}
 
export default Timer;