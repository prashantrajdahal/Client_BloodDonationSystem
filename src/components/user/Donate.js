import React, {useEffect, Fragment, useState} from 'react';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps"
import withScriptjs from 'react-google-maps/lib/withScriptjs';

import { useSelector } from "react-redux";



const Donate = ()=> {

    let latitude,longitude;
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            
            latitude=position.coords.latitude;
            longitude=position.coords.longitude;
            
        })
    },[])
    const { user, loading } = useSelector((state) => state.auth);
    function Map(){
        return(
            <GoogleMap
                        defaultZoom={14}
                        defaultCenter={{ lat: 27.717245, lng: 85.323959 }}
                    >
                         {<Marker position={{ lat: latitude, lng: longitude     }} />}
                        </GoogleMap>
        );

    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));
    
    return(
        
    <div className='donate-container'>
        
        <div className='leftside'>
        <Fragment>
            {user ? ( <div>
                <div className="row wrapper">
                            <div className="col-10 col0lg-5">
                                <form className="shadow-lg"  encType='multipart/form-data'>
                                    <h1 className="mb-3">Donate</h1>
                                
                                    <div className="form-group">
                                    <label htmlFor="email_field">Name</label>
                                    <input
                                        type="name"
                                        id="name_field"
                                        className="form-control"
                                        name='name'
                                        
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        name='email'
                                        
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="bloodType_field">bloodType</label>
                                    <input
                                        type="text"
                                        id="bloodType_field"
                                        className="form-control"
                                        name='bloodType'
                                        
                                    />
                                    
                                    </div>
                                    
                                    <div className="form-group">
                                    <label htmlFor="bloodType_field">Address</label>
                                    <input
                                        type="text"
                                        id="address_field"
                                        className="form-control"
                                        name='bloodType'
                                        
                                    />
                                    
                                    </div>
                                    <button
                                        id="submit-button"
                                        type="submit"
                                        className="btn btn-block py-3"
                                    
                                        
                                    >
                                        Submit
                                    </button>
                              </form>  
                        </div>
                        </div>
            </div>) : ( !loading &&( <div>
                <button
                                        id="submit-button"
                                        type="submit"
                                        className="btn btn-block py-3"
                                        style={{color:"#fff", fontSize:"40px"}}
                                        
                                        
                                    >
                                     click here to login first!!
                                    </button>
            </div>)) }
        </Fragment>
           
                
                </div>
                <div className='rightside'>
                <WrappedMap
                googleMapURL= 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC6lpd6rWTg2Jji5UbXN7jIO5vZ-tbXxrY'
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                
                 />
                </div>
        </div>
    );
}

export default Donate;