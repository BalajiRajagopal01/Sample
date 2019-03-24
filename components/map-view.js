import React from 'react';
import { MapView } from 'expo';



const MyMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            onRegionChangeComplete={(reg) => props.onRegionChange(reg)}>
            
            
        </MapView>
    )
}

export default MyMapView;