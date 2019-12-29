import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';

import classes from './stylesheets/Map.css';

const map = props => {
    const apiKey = props.apiKey || process.env.MAP_API_KEY;
    const mapStyleURL = props.mapStyle || "mapbox://styles/bemak/ck4m4s7c715g01csaidvkr95i";
    const pinColorObj = props.pinColor ? { style: { color: `${props.pinColor}` } } : null;
    const lat = parseFloat(props.lat) || 0;
    const lng = parseFloat(props.lng) || 0;
    const zoom = parseFloat(props.zoom) || 13;
    const allowZoom = props.disableZoom ? false : true;

    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lng,
        zoom: zoom,
        width: props.width || "50vw",
        height: props.height || "50vw",
    })

    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key === 'Escape') {
                setSelectedLocation(null);
            }
        };
        window.addEventListener('keydown', listener)

        return () => {
            window.removeEventListener('keydown', listener)
        }
    }, [])

    const mapZoomFunc = allowZoom ? (viewport) => setViewport(viewport) : null;

    return (
        <ReactMapGL {...viewport}
            mapboxApiAccessToken={apiKey}
            onViewportChange={mapZoomFunc}
            mapStyle={mapStyleURL}>

            {allowZoom ? <div className={classes.NavControlContainer}>
                <NavigationControl />
            </div> : null}

            {/* Location Maker */}
            <Marker latitude={lat} longitude={lng}>
                {/*You can add any element,but click listener must be the same */}
                <div className={classes.Marker} {...pinColorObj} onClick={(event) => setSelectedLocation(event)}></div>
            </Marker>

            {/*Popup about location */}
            {selectedLocation && props.allowPopup ? (
                <Popup latitude={lat} longitude={lng} onClose={() => setSelectedLocation(null)}>
                    <div>
                        <h2>{props.descripHeader}</h2>
                        <p>{props.descripText}</p>
                    </div>
                </Popup>
            ) : null}

        </ReactMapGL>
    );

}


export default map;
