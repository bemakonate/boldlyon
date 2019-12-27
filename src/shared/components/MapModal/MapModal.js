import React from 'react';
import Map from '../../../UI/Map/Map';
import Modal from '../../../UI/Modal/Modal';

import classes from './stylesheets/MapModal.css';

const MapModal = props => {
    return (
        <Modal
            click={props.closeModal}
            show={props.show}
            modalStyles={classes.ModalStyles}
            title="location"
            onlyModalClick>
            <div className={classes.MapContainer}>
                <Map lat={40.739266} lng={-73.990239} pinColor="red" disableZoom zoom='12' width="100%" height="100%" />
            </div>
        </Modal>
    )
}

export default MapModal;