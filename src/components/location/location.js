import React from 'react'
import './_location.scss'
import GoogleMapReact from 'google-map-react'

class Location extends React.Component {
  static defaultProps = {
    center: {
      lat: 35.044539,
      lng: -85.309419,
    },
    zoom: 11,
  }

  render() {
    return (
      <div id="location" style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `AIzaSyDAiHAnNrXwBE4WZXEnmHMpa_YZrRP5rHo` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    )
  }
}

export default Location
