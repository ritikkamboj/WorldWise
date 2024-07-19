/* eslint-disable react/prop-types */
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  console.log(city);
  const {currentCity, deleteCity}= useCities();
  const { cityName, date, emoji, id,position } = city;
  console.log(position)

  // function getFlagEmoji(countryCode) {
  //     return countryCode
  //       .toUpperCase()
  //       .replace(/./g, char => String.fromCodePoint(char.charCodeAt() + 127397));
  //   }
  function handleClick(e)
  {
    e.preventDefault();
    console.log('jai shree ram')
    deleteCity(id);
  }

  return (
    <li>
      <Link className={`${styles.cityItem} ${id===currentCity.id ? styles['cityItem--active'] : ""}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
