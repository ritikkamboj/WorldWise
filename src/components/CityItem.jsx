/* eslint-disable react/prop-types */
import styles from './CityItem.module.css'

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    
    }).format(new Date(date));

function CityItem({city}) {
    console.log(city);
    const {cityName,date,emoji}= city;

    // function getFlagEmoji(countryCode) {
    //     return countryCode
    //       .toUpperCase()
    //       .replace(/./g, char => String.fromCodePoint(char.charCodeAt() + 127397));
    //   }

    return (
        <li className={styles.cityItem}>
           <span className={styles.emoji}>{emoji}</span>
           <h3 className={styles.name}>{cityName}</h3>
           <time className={styles.date}>({formatDate(date)})</time>
           <button className={styles.deleteBtn}>&times;</button>

            {city.name}
        </li>
    )
}

export default CityItem
