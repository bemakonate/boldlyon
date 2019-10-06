import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const layout = props => (
    <Fragment>
        <Navbar />
        <main>
            {props.children}
        </main>
        <div>Footer</div>
    </Fragment>
);

export default layout;