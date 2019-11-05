import React, { Component } from 'react';
import TodosBuilder from '../TodosBuilder/TodosBuilder';
import HomeBuilder from '../HomeBuilder/HomeBuilder';
import Layout from '../Layout/Layout';
import classes from './stylesheets/App.css';
import { Route, withRouter, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    let appClasses = [classes.App];
    switch (this.props.location.pathname) {
      case '/todos':
        appClasses.push(classes.TodosBuilder)
        break;
      default:
        appClasses.push(classes.HomeBuilder);
      //Set the default styling of app here
    }

    return (
      <div className={appClasses.join(' ')}>
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
