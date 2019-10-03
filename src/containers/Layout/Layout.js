import React, { Fragment } from 'react';

const layout = props => (
    <Fragment>
        <div>Navbar</div>
        <main>
            {props.children}
        </main>
        <div>Footer</div>
    </Fragment>
);

export default layout;