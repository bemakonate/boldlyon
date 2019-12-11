import React from 'react';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';
import * as userActions from '../../../../user/store/actions';

const navigationItems = props => (
    <React.Fragment>
        <ul onClick={props.click} className={props.containerStyles}>
            <NavigationItem
                exact
                link='/'
                styles={[props.linkStyles, props.brandStyles].join(' ')}
                activeClass={props.activeClass}>Home</NavigationItem>
            <NavigationItem
                link='/todos'
                styles={props.linkStyles}
                activeClass={props.activeClass}>Todo List</NavigationItem>
        </ul>
        <ul onClick={props.click} className={props.authContainerStyles}>
            <li onClick={() => props.onOpenAuthModal('signup')}>Signup</li>
            <li onClick={() => props.onOpenAuthModal('login')}>Login</li>
        </ul>
    </React.Fragment>
);

const mapDispatchToProps = dispatch => {
    return {
        onOpenAuthModal: (authType) => dispatch(userActions.showAuthModal(authType)),
    }
}
export default connect(null, mapDispatchToProps)(navigationItems);