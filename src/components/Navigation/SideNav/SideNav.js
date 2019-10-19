import React, { Fragment } from 'react';
import classes from './stylesheets/SideNav.css';
import appImg from '../../../assets/mountains.jpeg';
import Backdrop from '../../../containers/Layout/Backdrop/Backdrop'
import PropTypes from 'prop-types';

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
                <img className={classes.AppImg} src={appImg} alt="The mountains" />
                <ul>
                    <li className={classes.SideBrand}>Todo List App</li>
                    <li onClick={props.closeSideNav}>
                        <a href='/'>Home</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );

}

sideNav.propTypes = {
    showSideNav: PropTypes.bool,
    openSideNav: PropTypes.func,
    closeSideNav: PropTypes.func,
}
export default sideNav;