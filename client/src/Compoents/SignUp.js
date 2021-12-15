import React, { useState } from "react";
import { register } from "../Redux/action/AuthActions";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import AuthReducer from './../Redux/Reducers/AuthReducer';

const SignUp = () => {
  const isAuth=useSelector(state=>state.AuthReducer)
  
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: " ",
    email: " ",
    password: " ",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(register(user));
    setUser({
      username: " ",
      email: " ",
      password: " ",
    });
    if(isAuth==true){
      navigate('/profile')
    }
  };
  
  
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="username">Username</label>
        <input
          value={user.username}
          onChange={handleChange}
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group">
        <label for="email">Email address</label>
        <input
          value={user.email}
          onChange={handleChange}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          value={user.password}
          onChange={handleChange}
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

export default SignUp;
