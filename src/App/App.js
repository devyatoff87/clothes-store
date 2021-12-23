import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "components/compound/header/Header_comp";
import Home from "components/pages/home/Home_page";
import Shop from "components/pages/shop/Shop_page";
import Auth from "components/pages/auth/Auth";
import Checkout from "components/pages/checkout/Checkout_page";
import Footer from "components/compound/footer/Footer_comp";
import Contact from "components/pages/contact/Contact_page";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
