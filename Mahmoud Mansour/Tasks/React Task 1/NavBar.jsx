import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyShop</div>
      <ul className="nav-links">
        <li><a href="#show">Home</a></li>
        <li><a href="#container">Products</a></li>
        <li><a href="#cart">Cart</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
