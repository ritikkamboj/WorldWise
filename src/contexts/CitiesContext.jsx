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

    case "cities/created":

    case "cities/deleted":

    default:
      throw new Error("Unknown action type ");
  }
}

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [{ isLoading, cities, currentCity }, dispatch] = useReducer(
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
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []); // Include BASE_URL if it's coming from props or state

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      console.log(data);
      setCurrentCity(data);
      console.log(data);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
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
      setCities((cities) => [...cities, data]); // console.log(data);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      // console.log(data);
      // console.log(cities)
      setCities((cities) => cities.filter((city) => city.id !== id)); // console.log(data);
    } catch (error) {
      console.error("There was an error in deleting the city:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
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
