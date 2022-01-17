import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Navbar>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/DashBoard">DashBoard</Link>
      <Link to="/admin">Admin</Link>
    </Navbar>
  );
};
