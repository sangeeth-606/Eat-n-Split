/* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */


/* eslint-disable react/no-unknown-property */
// filepath: /c:/Users/sange/Documents/WORLDspace/src/components/Map.jsx
// import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useCities } from "./contexts/CitiesContext";
// import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const [mapPosition, setmapPosition] = useState([51.505, -0.09]);
  const { cities } = useCities();

  // const [searchParams] = useSearchParams();
  const {
    isLoading: isLoadingPosition,
    position: geolocation,
    getPosition,
  } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();
  // const mapLat = parseFloat(searchParams.get("lat")) || 40;
  // const mapLng = parseFloat(searchParams.get("lng")) || 0;

  useEffect(
    function () {
      if (mapLat && mapLng) setmapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(() => {
    if (geolocation) setmapPosition([geolocation.lat, geolocation.lng]);
  }, [geolocation]);

  return (
    <div className={styles.mapContainer}>
      { 
      !geolocation &&(
       <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use Current Position"}
      </Button>)}
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
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>
                {city.emoji} <span>{city.cityName}</span>
              </span>
            </Popup>
          </Marker>
        ))}
        <ChangeCentre position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCentre({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
