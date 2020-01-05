import React, { Component, Suspense, lazy } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './stylesheets/App.css';
import Layout from '../shared/Layout/Layout';
import * as userActions from '../user/store/actions';
import HomeBuilder from '../extras/pages/homeBuilder/homeBuilder';


const TodosBuilder = lazy(() => import('../todos/pages/todosBuilder/todosBuilder'));
const SignupBuilder = lazy(() => import('../user/pages/signupBuilder/signupBuilder'));
const LoginBuilder = lazy(() => import('../user/pages/loginBuilder/loginBuilder'));
const LogoutBuilder = lazy(() => import('../user/pages/logoutBuilder/logoutBuilder'))

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <React.Fragment>
        {this.props.currentModal === 'signup' ? <Suspense fallback={<div />}><SignupBuilder /></Suspense> : null}
        {this.props.currentModal === 'login' ? <Suspense fallback={<div />}><LoginBuilder /></Suspense> : null}
        <Switch>
          <Route path="/" exact component={HomeBuilder} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>

    )
    if (this.props.isAuth) {

      routes = (
        <React.Fragment>
          <Switch>
            <Route path='/todos' render={() => <Suspense fallback={<div />}><TodosBuilder /></Suspense>} />
            <Route path='/logout' render={() => <Suspense fallback={<div />}><LogoutBuilder /></Suspense>} />
            <Route path="/" exact component={HomeBuilder} />
            <Redirect to="/" />
          </Switch>
        </React.Fragment>
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
