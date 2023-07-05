import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "20rem",
};

const center = {
  lat: 34.7293466708865,
  lng: 135.49939605607292,
};

const zoom = 13;

const Map: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
