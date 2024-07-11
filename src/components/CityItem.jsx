/* eslint-disable react/prop-types */


function CityItem({city}) {
    console.log(city.name)
    return (
        <li>
            {city.name}
        </li>
    )
}

export default CityItem
