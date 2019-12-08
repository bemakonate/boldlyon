import React, { Component, Fragment } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

class Layout extends Component {
    state = {
        showSideNav: false,
    }
    openSideNavHandler = () => {
        this.setState({ showSideNav: true });
    }
    closeSideNavHandler = () => {
        this.setState({ showSideNav: false });
    }
    render() {
        return (
            <Fragment>
                <Navigation
                    showSideNav={this.state.showSideNav}
                    openSideNav={this.openSideNavHandler}
                    closeSideNav={this.closeSideNavHandler} />
                {this.props.children}
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;