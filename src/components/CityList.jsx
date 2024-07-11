/* eslint-disable react/prop-types */
import styles from './CityList.module.css'
import Spinner from './Spinner'
import CityItem from './CityItem'
import Message from './Message'

function CityList({isLoading ,cities}) {
    if(isLoading) return <Spinner/>
    console.log(cities)

    if(!cities.length)
    return <Message  message={'There is no data in array which you fetched  '}/>

    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
        </ul>
          )
}

export default CityList
