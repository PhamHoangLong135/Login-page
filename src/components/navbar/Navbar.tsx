import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/product"
      >
        Product
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/order"
      >
        Order
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/contact"
      >
        Contact
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        to="/register"
      >
        Log out
      </NavLink>
    </div>
  );
};
