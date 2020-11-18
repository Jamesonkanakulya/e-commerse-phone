import React from "react";
import { FcPhone } from "react-icons/fc";
import { FaAlignLeft, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./StyledComponents";
import Basket from "./Basket";

function Navbar() {
  return (
    <div className="nav-bar">
      <Link to="/" className="logo">
        <FcPhone size="2rem" />
      </Link>
      <Link to="/" className="main-title">
        products
      </Link>

      <Button color="white" className="chart-button">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <FaShoppingCart />
          <span className="pl-2">My cart</span> &nbsp;
          <Basket />
        </Link>
      </Button>
    </div>
  );
}

export default Navbar;
