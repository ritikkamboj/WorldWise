import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Product" element={<Product />} />
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
