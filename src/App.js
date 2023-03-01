import './App.css';
import Nav from'./Components/Nav';
import Header from './Components/Header';
import Main from'./Components/Main';
import Footer from'./Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Bookingpage from './Components/Bookingpage';
import React from "react";
import Confirmedbooking from './Components/Confirmedbooking';


function App() {

  return (
    <>
      <Nav />
      <Header />
      <Routes>
       <Route path='/home' element={<Header /> } />
       {/*<Route path='/main' element={<Main /> } /> */}
       <Route path='/reservation' element={<Bookingpage /> } />
       <Route path='/confirmbooking' element={<Confirmedbooking />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
