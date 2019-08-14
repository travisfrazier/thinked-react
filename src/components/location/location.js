import React from 'react'
import './_location.scss'
import GoogleMapReact from 'google-map-react'

class Location extends React.Component {
  static defaultProps = {
    center: {
      lat: 35.032442,
      lng: -85.274738,
    },
    zoom: 12,
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
