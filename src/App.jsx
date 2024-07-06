import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";

function App() {
  return (
    <div>
      <h1>Jai Shree Ram </h1>
      <BrowserRouter>
        <Routes>
          <Route path="Pricing" element={<Pricing/>} />
          <Route path="Product" element={<Product/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="App" element={<AppLayout/>} />
          <Route path ="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
