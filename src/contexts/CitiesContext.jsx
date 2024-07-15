/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);
        setCities(data);
        console.log(data);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []); // Include BASE_URL if it's coming from props or state

  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities()
{
    const context = useContext(CitiesContext);
    if(context === undefined)
        throw new Error('You are using context outside the context provider ');
    return context ;
}

export { CitiesProvider , useCities};
