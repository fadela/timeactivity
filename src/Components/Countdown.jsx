import React, { Component } from 'react';
import Nav from './Nav';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import Controls from './Controls'

class Countdown extends Component {
   state = {
      count : 0,
      countdownStatus: 'stopped'
   }
   componentDidUpdate(prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus){
        switch (this.state.countdownStatus) {
            case 'started':
                this.startTimer();
                break ;
            case 'stopped':
                this.setState({count: 0}) ;  
            case 'paused' :
                clearInterval(this.timer)
                this.timer = undefined;
                break ;
        }
    }
   }

   startTimer(){
       this.timer = setInterval(() => {
        var newCount = this.state.count -1 ;
        this.setState({
            count: newCount >=0 ? newCount : 0
        })
        if(newCount === 0) {
            this.setState({countdownStatus: 'stopped'})
        }
       },1000)
   }
  
   handleSetCountdown = (strSeconds) => {
       this.setState ({
           count : strSeconds,
           countdownStatus: 'started'
       })
   }

   handleStatusChange = (newStatus) => {
    this.setState({countdownStatus: newStatus});
   }

   
   
    render() { 
        let {count, countdownStatus} = this.state;
        return ( 
            <div>
               
                <Clock totalSeconds={count}/>
                <div className="col-md-6 offset-md-3">
                {countdownStatus !== 'stopped' ?
                   <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/> :
                   <CountdownForm onSetCountdown={this.handleSetCountdown}/>}
                
                </div>
                
            </div>
         );
    }
}
 
export default Countdown;