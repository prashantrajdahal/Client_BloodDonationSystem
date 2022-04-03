import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Googlemap extends Component{
    
    static defaultProps = {
        zoom: 16,
      };

    geoLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }
        render(){
            return(
                <div style={{ height: '40vh', width: '100%' ,margin:'auto' }}>
                  {console.log(this.props.lat)}
                  {console.log(this.props.lng)}
                  
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC6lpd6rWTg2Jji5UbXN7jIO5vZ-tbXxrY"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={this.props.lat}
                        lng={this.props.lng}
                    />
                    </GoogleMapReact>
                </div>
            );
        }
    }
