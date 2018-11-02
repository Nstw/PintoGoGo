import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import CurrentLocation from "./currentLoc";
import { throws } from "assert";
import "./style-ggmap.css";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row test">
            <h1>Happy</h1>
          </div>
        </div>

        <div className="container">
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
            onClick={this.onMapClicked}
          >
            <Marker
              onClick={this.onMarkerClick}
              name={"current location"}
              draggable={true}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h5>{this.state.selectedPlace.name}</h5>
              </div>
            </InfoWindow>
          </CurrentLocation>
          {/*{console.log(this.props)} */}
        </div>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBKOfI6E4o_jRc1K8qBb63RsUKwZAavGSs"
})(MapContainer);
