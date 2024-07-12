import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";


const BASE_URL = 'http://localhost:9000' ;



// Update cities array to use flag emojis


function App() {

  const [cities, setCities]= useState([]);
  const [isLoading, setIsLoading]= useState();

  

  useEffect(function(){
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data)
        setCities(data);
        console.log(data)
      } catch (error) {
        console.error('There was an error fetching the data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []); // Include BASE_URL if it's coming from props or state


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Product" element={<Product />} />
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path="cities/:id" element={<City/>}/>
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
