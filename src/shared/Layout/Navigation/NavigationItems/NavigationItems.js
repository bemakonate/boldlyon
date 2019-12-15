import React from 'react';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';
import * as userActions from '../../../../user/store/actions';

const navigationItems = props => {
    let navbar = (
        <React.Fragment>
            <ul onClick={props.click} className={props.mainLinkStyles}>
                <NavigationItem
                    exact
                    link='/'
                    styles={[props.linkStyles, props.brandStyles].join(' ')}
                    activeClass={props.activeClass}>Home</NavigationItem>
            </ul>
            <ul onClick={props.click} className={props.sideLinkStyles}>
                <li onClick={() => props.onOpenAuthModal('signup')}>Signup</li>
                <li onClick={() => props.onOpenAuthModal('login')}>Login</li>
            </ul>
        </React.Fragment>
    )
    if (props.isAuth) {
        navbar = (
            <React.Fragment>
                <ul onClick={props.click} className={[props.mainLinkStyles, props.isAuthMainStyles].join(' ')}>
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
                <ul onClick={props.click} className={[props.sideLinkStyles, props.isAuthSideStyles].join(' ')}>
                    <NavigationItem
                        link='/logout'
                        styles={props.linkStyles}
                        activeClass={props.activeClass}>Logout</NavigationItem>
                </ul>
            </React.Fragment>
        )
    }
    return navbar;
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onOpenAuthModal: (authType) => dispatch(userActions.showAuthModal(authType)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(navigationItems);