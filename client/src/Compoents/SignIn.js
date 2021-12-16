import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/action/AuthActions";
import {useNavigate} from "react-router-dom";
const SignIn = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [user,setUser]=useState({email:" ",password:" "})
  const handleChange=(event)=>{
    setUser({...user,[event.target.id]:event.target.value})
  }
  const onSubmit=(event)=>{
   event.preventDefault();
   dispatch(login(user,navigate))
   setUser({email:" ",password:" "})
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="email">Email address</label>
        <input onChange={handleChange} value={user.email}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input onChange={handleChange} value={user.password}
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignIn;
