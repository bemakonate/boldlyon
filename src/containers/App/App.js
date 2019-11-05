import React, { Component } from 'react';
import TodosBuilder from '../TodosBuilder/TodosBuilder';
import Layout from '../Layout/Layout';
import classes from './stylesheets/App.css';
import { Route, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    let appClasses = [classes.App];
    switch (this.props.location.pathname) {
      case '/todos':
        appClasses.push(classes.TodosBuilder)
        break;
      default:
    }
    return (
      <div className={appClasses.join(' ')}>
        <Layout>
          <Route path="/todos" exact component={TodosBuilder} />
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
