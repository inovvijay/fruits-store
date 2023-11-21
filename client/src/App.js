import React from "react";
import { Routes, Route } from "react-router-dom";
import "./component/common/Layout.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Product from "./component/pages/Producat";
import Contact from "./component/pages/Contact";
import FruitNavbar from "./component/common/Fruit_Navbar";
import Sign_up from "./component/pages/Signup";
import Signin from "./component/pages/Signin";

const App = () => {
  return (
    <div className="vh-100">
      <div className="navbar_container">
        <FruitNavbar />
      </div>
      <div className="main_container vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
