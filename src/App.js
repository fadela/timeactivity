import React, { Component } from 'react';
import './App.scss';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Countdown from './Components/Countdown';
import Main from './Components/Main';
import Timer from './Components/Timer';
import Counters from './Components/Counters';
import TodoApp from './Components/TodoApp';

class App extends Component {
  
  render() {
    return (
      <div>
         <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/countdown" component={Countdown} />
            <Route exact path="/counters" component={Counters} />
            <Route exact path="/todoapp" component={TodoApp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
