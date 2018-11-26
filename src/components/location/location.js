import React from 'react'
import './_location.scss'
import GoogleMapReact from 'google-map-react'

class Location extends React.Component {
  static defaultProps = {
    center: {
      lat: 32.717916,
      lng: -117.157785,
    },
    zoom: 11,
  }

  render() {
    return (
      <div id="location" style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyBmUKguEbTKFiAuUOV-dZ0dpCbKj1CA-D8` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    )
  }
}

export default Location
