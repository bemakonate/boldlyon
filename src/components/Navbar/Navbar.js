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

            {/*Regular Nav*/}
            <nav className={classes.Navbar}>
                <ul>
                    <li><a href='/' className={classes.NavbarBrand}>Todo List App</a></li>
                    <li><a href='/'>Home</a></li>
                </ul>
            </nav>
        </Fragment>
    );
}
export default navbar;