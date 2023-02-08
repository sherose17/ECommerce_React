import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css";
import { ContextApi } from "../context/ShopContext";
import Search from "./Search";


export const Navbar = () => {
  const {product}= ContextApi()
  console.log(product.cart.length)
  return (
    <div className="navbar">
      <div className="links">
        <Link className="shop" to="/"> Shop </Link>
        <Search/>
        <Link to="/cart" data={product.cart.length}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
};