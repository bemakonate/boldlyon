import React, { Component } from 'react';
import classes from './stylesheets/Navbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

class Navbar extends Component {
    state = {
        sticky: false,
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let lastScrollY = window.scrollY;
        const nav = document.querySelector('#navbar');
        if (lastScrollY > nav.offsetTop) {
            this.setState({ sticky: true })
        } else {
            this.setState({ sticky: false })
        }

    }

    render() {
        let navClasses = [classes.Navbar];
        if (this.state.sticky) {
            navClasses.push(classes.Sticky)
        }
        return (
            <React.Fragment>
                <nav className={navClasses.join(' ')} id="navbar">
                    <NavigationItems
                        linkStyles={classes.Link}
                        brandStyles={classes.NavbarBrand}
                        activeClass={classes.active}
                        containerStyles={classes.MainLinks}
                        authContainerStyles={classes.AuthButtons} />
                </nav>

            </React.Fragment>

        )
    }
}
export default Navbar;