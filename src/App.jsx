import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";
import CityList from "./components/CityList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Product" element={<Product />} />
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList/>} />
            <Route path="cities" element={<CityList/>} />
            <Route path="countries" element={<p>Countries</p>} />
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
