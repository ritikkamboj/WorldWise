/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams(); // its like useState hookn, whcih also give array

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return <div className={styles.mapContainer}>
    <h1>Map Positions</h1>
    <p>position : {lat} and {lng}</p>
  </div>;
}

export default Map;
