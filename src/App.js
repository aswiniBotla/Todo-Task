import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;