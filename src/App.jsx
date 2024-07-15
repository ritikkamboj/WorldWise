import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./components/CityList";
// import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";




// Update cities array to use flag emojis


function App() {


  return (
    <div>
    <CitiesProvider>
    <BrowserRouter>
        <Routes>
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Product" element={<Product />} />
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities"/>} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City/>}/>
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form/>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
    </div>
  );
}

export default App;
