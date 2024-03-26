import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Home from "./components/Home";
import CrudCart from "./components/Cart";
import WishList from "./components/WishList";
import SingleProduct from "./components/SingleProduct";
import ProductCreation from "./components/ProductCreation";
import Cart from "./components/Cart";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Services/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          {<Route path="/signup" element={<Signup></Signup>}></Route>}
          {/*protected Routed*/}
          {/* <Route path="/" element={<ProtectedRoutes />}> */}
          {<Route path="/Home" element={<Home></Home>}></Route>}

          {<Route path="/Cart" element={<Cart></Cart>}></Route>}
          <Route path="/WishList" element={<WishList></WishList>}></Route>

          {
            <Route
              path="/SingleProduct"
              element={<SingleProduct></SingleProduct>}
            ></Route>
          }
          {
            <Route
              path="/ProductCreation"
              element={<ProductCreation></ProductCreation>}
            ></Route>
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
