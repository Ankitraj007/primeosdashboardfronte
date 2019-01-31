import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Indexs from './../containers/dashboard/index';
import Users from './Users';
import UserTable from './Usertable';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/' component={Indexs}/>
        <Route path='/users' component={Users}/>
        <Route path='/ut' component={UserTable}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
