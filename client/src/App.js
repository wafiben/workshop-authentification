import "bootstrap/dist/css/bootstrap.css";
import Home from "./Compoents/Home";
import UseProfile from "./Compoents/UseProfile";
import SignIn from "./Compoents/SignIn";
import SignUp from "./Compoents/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Compoents/Navbar";
import { useEffect } from "react";
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { getUser } from "./Redux/action/AuthActions";


function App() { 
  const dispatch=useDispatch()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(getUser())
    }
  },[])
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/profile" element={
      <PrivateRoute  >
        <UseProfile/>
      </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
