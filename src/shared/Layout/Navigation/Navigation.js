import React, { Fragment } from 'react';

import SideNav from './SideNav/SideNav';
import Navbar from './Navbar/Navbar';

const navigation = props => {

    return (
        <Fragment>
            <SideNav
                openSideNav={props.openSideNav}
                closeSideNav={props.closeSideNav}
                showSideNav={props.showSideNav} />
            <Navbar />
        </Fragment>
    );
}
export default navigation;