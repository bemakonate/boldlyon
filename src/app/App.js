import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './stylesheets/App.css';
import Layout from '../shared/Layout/Layout';
import * as userActions from '../user/store/actions';
import TodosBuilder from '../todos/pages/todosBuilder/todosBuilder';
import HomeBuilder from '../extras/pages/homeBuilder/homeBuilder';
import SignupBuilder from '../user/pages/signupBuilder/signupBuilder';
import LoginBuilder from '../user/pages/loginBuilder/loginBuilder';
import LogoutBuilder from '../user/pages/logoutBuilder/logoutBuilder';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <React.Fragment>
        {this.props.currentModal === 'signup' ? <SignupBuilder /> : null}
        {this.props.currentModal === 'login' ? <LoginBuilder /> : null}
        <Switch>
          <Route path="/" exact component={HomeBuilder} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>

    )
    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/todos" component={TodosBuilder} />
          <Route path='/logout' component={LogoutBuilder} />
          <Route path="/" exact component={HomeBuilder} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentModal: state.auth.currentModal,
    isAuth: state.auth.token != null,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(userActions.authCheckState()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
