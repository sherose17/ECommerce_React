import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/NavBar';
import Cart from './pages/cart';
import Shop from './pages/shop';
import { Context } from './context/ShopContext';

function App() {
   
  return (
    <div>
      <Context>
      <Router>
        <Navbar></Navbar>
        <Routes>
        <Route path='/'element={<Shop></Shop>} ></Route>
        <Route path='/cart'element={<Cart/>}></Route>
        </Routes>
      </Router>
      </Context>
    </div>
  );
}

export default App;
