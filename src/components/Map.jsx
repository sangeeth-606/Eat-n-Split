// filepath: /c:/Users/sange/Documents/WORLDspace/src/components/Map.jsx
// import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";

function Map() {
  const mapPosition = [51.505, -0.09];

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            <span><h1>jjj</h1></span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;