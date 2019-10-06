import React, { Component, Fragment } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

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
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;