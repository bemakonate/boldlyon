import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as userActions from '../../store/actions';

class LogoutBuilder extends Component {
    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return <Redirect to='/' />
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(userActions.logout())
    }
}
export default connect(null, mapDispatchToProps)(LogoutBuilder);