/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: ""

};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

      case 'city/loaded':
        return {...state , isLoading : false , currentCity : action.payload}


    case "city/created":
      return {
        ...state , isLoading : false , cities : [...state.cities, action.payload],
        currentCity : action.payload

      }

    case "city/deleted":
      return {
        ...state , isLoading : false , cities : state.cities.filter((city) => city.id !== action.payload),
        currentCity : {}
      }

    case 'rejected':
      return {
        ...state,
        isLoading : false,
        error : action.payload
      }



    default:
      throw new Error("Unknown action type ");
  }
}

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [{ isLoading, cities, currentCity,error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      // setIsLoading(true);
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);
        // setCities(data);
        dispatch({type : 'cities/loaded', payload : data})
        console.log(data);
      } catch  {
        // console.error("There was an error fetching the data:", error);
        dispatch({type : 'rejected', payload : 'There was an error fetching the cities'})
      } 
    }

    fetchCities();
  }, []); // Include BASE_URL if it's coming from props or state

  async function getCity(id) {

    if(Number(id) === currentCity.id) return ;
    dispatch({ type: "loading" });
    try {
      // setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data);
      dispatch({type : 'city/loaded', payload : data})
      // setCurrentCity(data);
      console.log(data);
    } catch {
      dispatch({type : 'rejected', payload : 'There was an error loading the city'})
    } 
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      // setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("There was an error in creating a city ");
      }
      const data = await res.json();
      // console.log(data);
      // console.log(cities)
      // setCities((cities) => [...cities, data]); // console.log(data);
      dispatch({type : 'city/created' , payload : data})
    } catch  {
      dispatch({type : 'rejected', payload : 'there was an problem in creating a city '})
    } 
  }
  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      // setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      // console.log(data);
      // console.log(cities)
      // setCities((cities) => cities.filter((city) => city.id !== id)); // console.log(data);
      dispatch({type : "city/deleted", payload : id})
    } catch {
      dispatch({type : 'rejected', payload : 'there was an problem in deleting a city '})
    } 
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("You are using context outside the context provider ");
  return context;
}

export { CitiesProvider, useCities };
