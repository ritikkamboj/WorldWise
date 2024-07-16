/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();

  const {cities }= useCities();

  const [searchParams, setSearchParams] = useSearchParams(); // its like useState hookn, whcih also give array
  const [mapPosition, setMapPaosition] = useState([100, 100]);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat,lng)
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <MapContainer className={styles.mapContainer} center={mapPosition} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>) }
        <ChangeCenter position={[lat || 100,lng || 100]}/>

      </MapContainer>
    </div>
  );
}

function ChangeCenter({position})
{
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
