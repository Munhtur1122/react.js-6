import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Product from "./components/home/products";
import ProductDetail from "./components/home/detail";
import Home_detail from "./components/home/home_detail";
// import Detail from "./components/home/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/detail/:detailId`} element={<Home_detail />} />
        <Route path="/products" element={<Product />} />
        <Route path={`/products/:productId`} element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

