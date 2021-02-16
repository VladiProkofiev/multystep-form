import React, {Component} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends Component {
    render() {
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 55.753559, lng: 37.609218 }}
            >
         <Marker position={{ lat: 55.753559, lng: 37.609218 }} />
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDdko_1NI4U4bzQA5TcERefODqtnY8HiYw'
})(Maps);