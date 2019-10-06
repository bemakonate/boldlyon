import React, { Fragment } from 'react';
import classes from './stylesheets/Navbar.css';
import appImg from '../../assets/mountains.jpeg';

const navbar = props => {
    const menuIconClasses = ["material-icons", classes.Menu].join(' ');
    const closeIconClasses = ["material-icons", classes.Close].join(' ');
    const sideDrawerClasses = [classes.SideDrawer];

    if (props.showSideNav) {
        sideDrawerClasses.push(classes.ShowSideDrawer);
    }
    return (
        <Fragment>
            <nav className={classes.Navbar}>
                <i onClick={props.openSideNav} className={menuIconClasses}>menu</i>
            </nav>
            {/*SideNav */}
            <nav className={sideDrawerClasses.join(' ')}>
                <i onClick={props.closeSideNav} className={closeIconClasses}>close</i>
                <img className={classes.AppImg} src={appImg} alt="The mountains" />
                <ul>
                    <li className={classes.SideBrand}>Todo List App</li>
                    <li onClick={props.closeSideNav}>Home</li>
                </ul>
            </nav>
        </Fragment>
    );
}
export default navbar;