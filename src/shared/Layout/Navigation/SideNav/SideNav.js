import React, { Fragment } from 'react';
import classes from './stylesheets/SideNav.css';
import Backdrop from '../../../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems';

const sideNav = props => {
    const menuIconClasses = ["material-icons", classes.Menu].join(' ');
    const closeIconClasses = ["material-icons", classes.Close].join(' ');
    const sideDrawerClasses = [classes.SideDrawer];

    if (props.showSideNav) {
        sideDrawerClasses.push(classes.ShowSideDrawer);
    }
    return (
        <Fragment>
            <Backdrop show={props.showSideNav} click={props.closeSideNav} />
            <div className={classes.MenuContainer}>
                <i onClick={props.openSideNav} className={menuIconClasses}>menu</i>
            </div>
            {/*SideNav */}
            <nav className={sideDrawerClasses.join(' ')}>
                <i onClick={props.closeSideNav} className={closeIconClasses}>close</i>
                <NavigationItems
                    click={props.closeSideNav}
                    activeClass={classes.Active}
                    sideLinkStyles={classes.AuthButtons}
                    isAuthSideStyles={classes.IsAuthSideStyles} />
            </nav>
        </Fragment>
    );

}
export default sideNav;