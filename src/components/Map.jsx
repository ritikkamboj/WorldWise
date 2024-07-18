/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "./Button";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";

function Map() {
  const navigate = useNavigate();

  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams(); // its like useState hookn, whcih also give array
  console.log(searchParams);
  const [mapPosition, setMapPaosition] = useState([100, 100]);
  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeolocation();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  console.log(lat, lng);

  useEffect(
    function () {
      if (lat && lng) setMapPaosition([lat, lng]);
    },
    [lat, lng]
  );

  useEffect(
    function () {
      if (geoLocationPosition) {
        setMapPaosition([geoLocationPosition.lat, geoLocationPosition.lng]);
      }
    },
    [geoLocationPosition]
  );
  return (
    <div className={styles.mapContainer}>
    { !geoLocationPosition &&  <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use Your Position"}
      </Button>}
      <MapContainer
        className={styles.mapContainer}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
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
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      console.log(e);
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
