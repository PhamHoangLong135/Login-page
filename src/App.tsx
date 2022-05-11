import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { FormRegister } from "./pages/FormRegister";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Product } from "./pages/product/Product";
import "./app.scss"
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="register" element={<FormRegister />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="product" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="order" element={<Order />} />
      </Routes>
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
