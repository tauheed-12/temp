import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Form/Login/Login";
import Signup from "./Components/Form/Signup/Signup";
import Forgotpass from "./Components/Form/forgotPass/forgotpass";
const App = () =>{
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login/forgetpassword" element={<Forgotpass/>}></Route>
    </Routes> 
    </div>
  );
}

export default App;
