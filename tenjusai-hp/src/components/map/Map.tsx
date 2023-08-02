'use client';
import { useState, useEffect } from "react";
import React from "react";
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";


const containerStyle = {
    width: "100%",
    height: "20rem",
};

const center = {
  lat: 35.10662841796875,
  lng: 136.98300170898438
};

const markerPosition = {
  lat: 35.10662841796875,
  lng: 136.98300170898438
};

const destination = {
  lat: 35.10552841796875,
  lng: 136.98200170898438
};

const zoom = 14.5;

const Map: React.FC = () => {
  const [directionsResult, setDirectionsResult] = useState<google.maps.DirectionsResult | null>(null);

  const directionsCallback = (res: any) => {
    if (res !== null && res.status === 'OK') {
      setDirectionsResult(res);
    }
  };


  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={markerPosition} />
        {/* <DirectionsService
          options={{
            destination: destination,
            origin: '相生山駅',
            travelMode: 'WALKING' as google.maps.TravelMode, // use string directly
            language: 'ja',
            provideRouteAlternatives: true,
          }}
          callback={directionsCallback}
        />
        {
          directionsResult && (
            <DirectionsRenderer
              options={{
                directions: directionsResult
              }}
            />
          )
        } */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
