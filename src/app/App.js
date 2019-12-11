import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import classes from './stylesheets/App.css';
import Layout from '../shared/Layout/Layout';
import TodosBuilder from '../todos/pages/todosBuilder/todosBuilder';
import HomeBuilder from '../extras/pages/homeBuilder/homeBuilder';
import SignupBuilder from '../user/pages/signupBuilder/signupBuilder';
import LoginBuilder from '../user/pages/loginBuilder/loginBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <SignupBuilder />
          <LoginBuilder />
          <Switch>
            <Route path="/todos" exact component={TodosBuilder} />
            <Route path="/" component={HomeBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
