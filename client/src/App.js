import "bootstrap/dist/css/bootstrap.css";
import Home from "./Compoents/Home";
import UseProfile from "./Compoents/UseProfile";
import SignIn from "./Compoents/SignIn";
import SignUp from "./Compoents/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Compoents/Navbar";
import PrivateRoute from './PrivateRoute'

function App() {
  const isAuth=true;
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/profile" element={
      <PrivateRoute isAuth={isAuth}>
        <UseProfile/>
      </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
