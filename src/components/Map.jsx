/* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */
// // filepath: /c:/Users/sange/Documents/WORLDspace/src/components/Map.jsx
// // import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import styles from "./Map.module.css";
// import { useCities } from "./contexts/CitiesContext";
// import { useSearchParams } from "react-router-dom";
// // import { useMap } from "react-leaflet";

// function Map() {
//   const mapPosition = [51.505, -0.09];
//   const { cities } = useCities();

//   const [searchParams, setSearchParams] = useSearchParams();

//   const mapLat = searchParams.get("lat");
//   const mapLng = searchParams.get("lng");

//   return (
//     <div className={styles.mapContainer}>
//       <MapContainer
//         center={mapPosition}
//         // center={[mapLat , mapLng ]}
//         zoom={6}
//         scrollWheelZoom={true}
//         className={styles.map}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
//         />
//         {cities.map((city) => (
//           <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
//             <Popup>
//               <span> {city.emoji}  <span>{city.cityName}</span> </span>
//             </Popup>
//           </Marker>
//         ))}
//         <changeCentre position={[mapLat || 40 , mapLng || 0 ]} />
//       </MapContainer>
//     </div>
//   );
// }

// function changeCentre({position}){
//   const map = useMap()
//   map.setView(position )
//   return null;
// }

// export default Map;

/* eslint-disable react/no-unknown-property */
// filepath: /c:/Users/sange/Documents/WORLDspace/src/components/Map.jsx
// import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import styles from "./Map.module.css";
import { useCities } from "./contexts/CitiesContext";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Map() {
  const [mapPosition, setmapPosition] = useState([51.505, -0.09]);
  const { cities } = useCities();

  const [searchParams] = useSearchParams();

  const mapLat = parseFloat(searchParams.get("lat")) || 40; 
  const mapLng = parseFloat(searchParams.get("lng")) || 0; 


  useEffect(function(){
    if (mapLat && mapLng)
    setmapPosition([mapLat , mapLng])
  }, [mapLat, mapLng])

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

function DetectClick(){
  const navigate = useNavigate();
  useMapEvents({
    click : (e)=> navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
}
 
export default Map;
