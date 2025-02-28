import React from "react";
import Navbar from "./components/Navbar";
import "./components/Navbar/index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Landingscreen from "./screens/Landingscreen";
import Profile from "./screens/Profile";
import Adminscreen from "./screens/Adminscreen";




const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen/>}/>
          <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen/>}/>
          <Route path="/register" element={<Registerscreen/>}/>
          <Route path="/login" element={<Loginscreen/>}/>
          <Route path="/" element={<Landingscreen/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Adminscreen />} />  
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

