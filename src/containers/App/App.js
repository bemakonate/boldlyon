import React, { Component } from 'react';
import './App.css';
import HomeBuilder from '../HomeBuilder/HomeBuilder';
import Layout from '../Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <HomeBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
