import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="navbaar">
      <img
        src="https://download.logo.wine/logo/App_Store_(iOS)/App_Store_(iOS)-Logo.wine.png"
        alt="logo"
        className="logo"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/delete">Delete Product</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/* <li>
          {auth ? (
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li> */}
          <li>
            <Link onClick={logout} to="/signup">
              logout({JSON.parse(auth).Name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul text-right">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Navbar;
