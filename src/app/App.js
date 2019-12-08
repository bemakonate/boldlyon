import React, { Component } from 'react';
import TodosBuilder from '../todos/pages/todosBuilder/todosBuilder';
import HomeBuilder from '../extras/pages/homeBuilder/homeBuilder';
import Layout from '../shared/Layout/Layout';
import classes from './stylesheets/App.css';
import { Route, withRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
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
