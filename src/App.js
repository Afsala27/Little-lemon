import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Bookingpage from "./Components/Bookingpage";
import React from "react";
import Confirmedbooking from "./Components/Confirmedbooking";
import Items from "./Components/Items";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/about" element={<Items />} />
        <Route path="/reservation" element={<Bookingpage />} />
        <Route path="/confirmbooking" element={<Confirmedbooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
