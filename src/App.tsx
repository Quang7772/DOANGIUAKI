// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

import Home from "./Home";
import Layout from "./Layout";
import Trang1 from "./Trang1";
import Trang2 from "./Trang2";
import Listsanpham from "./Listsanpham";
import Chitietsanpham from "./Chitietsanpham";
import ListProducts_SP from "./ListProducts_SP";
import ProductDetail from "./ProductDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ListProducts_SP />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="listsanpham" element={<Listsanpham />} />
          <Route path="detail/:id" element={<ProductDetail />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
          <Route path="Trang2" element={<Trang2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
