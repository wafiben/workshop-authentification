import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
       <a className="navbar-brand">
          AUTHENTIFICATION
        </a>
        <Link  to="/register"className="navbar-brand">
          Register
        </Link>
        <Link to="/sign-in" className="navbar-brand" >
          Login
        </Link> 
      </div>
    </nav>
  );
};

export default Navbar;
