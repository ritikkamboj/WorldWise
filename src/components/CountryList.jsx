/* eslint-disable react/prop-types */

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
// import CityItem from './CityItem'
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const {isLoading,cities} = useCities();

  if (isLoading) return <Spinner />;
  console.log(cities);

  if (!cities.length)
    return (
      <Message message={"There is no data in array which you fetched  "} />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else
    return arr;
  }, []);
//   console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
