import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import AuthReducer from "./../Redux/Reducers/AuthReducer";
import { logOut } from "../Redux/action/AuthActions"; 
const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const handleClick=()=>{
    dispatch(logOut())
    navigate("/")
  }
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">AUTHENTIFICATION</a>
        {isAuth ? (
          <button onClick={handleClick}>LOG OUT</button>
        ) : (
          <div>
            <Link to="/register" className="navbar-brand">
              Register
            </Link>
            <Link to="/sign-in" className="navbar-brand">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
