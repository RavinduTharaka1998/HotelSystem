import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';


import Login from './components/Login'
import Register from './components/Register'


class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                        <Route exact path='/Register' component={Register}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;