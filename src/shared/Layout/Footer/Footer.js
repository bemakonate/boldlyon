import React, { useState } from 'react';
import classes from './stylesheets/Footer.css';
import MapModal from '../../../shared/components/MapModal/MapModal';

const footer = props => {
    const [showMapModal, setShowMapModal] = useState(false);
    return (
        <footer className={classes.Footer}>
            {showMapModal ? <MapModal show closeModal={() => setShowMapModal(false)} /> : null}
            <div className={classes.FooterContainer}>
                <p>&copy; bema konate, 2019</p>
                <div className={classes.Location}>
                    <button onClick={() => setShowMapModal(true)}>See Location</button>
                    <p>895 Broadway</p>
                    <p>New York, 10006 US</p>
                </div>
            </div>
        </footer>
    )
}

export default footer;