import React, { Component } from 'react';
import HomeBuilder from '../HomeBuilder/HomeBuilder';
import Layout from '../Layout/Layout';
import classes from './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <HomeBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
