import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';

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
                <Navbar
                    showSideNav={this.state.showSideNav}
                    openSideNav={this.openSideNavHandler}
                    closeSideNav={this.closeSideNavHandler} />
                <main>
                    {this.props.children}
                </main>
                <div>Footer</div>
            </Fragment>
        );
    }
}

export default Layout;