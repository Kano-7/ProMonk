import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

// import Male from "./components/Male";
// import Female from "./components/Female";
// import It from "./components/IT";
import Gold from "./components/Gold";
import About from "./components/About";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/homecomponents/Profile";
import WishList from "./components/homecomponents/WishList";
import CheckOut from "./components/homecomponents/CheckOut";
import OrderList from "./components/homecomponents/OrderList";
// import Checkout from "./components/Checkout";

 const App = () => {
     
    return (
      <>
        <Router>
          
          <div>
            {/* <Navbar /> */}
            <Routes>
           
             <Route path="/" element={<Login />}/>            
             <Route path="/signup" element={<SignUp />}/>  
            <Route path="/profile" element={<><Navbar /><Profile/></>} />
            <Route path="/orderList" element={<><Navbar /><OrderList/></>} />
            <Route path="/checkout" element={<><Navbar /><CheckOut/></>} />
              <Route path="/product" element={<><Navbar /><Product /><Footer/></>} />
              <Route path="/home" element={<><Navbar/><About/><Footer/></>} />
              <Route path="/productDetail" element={<><Navbar/><ProductDetail /><Footer/></>} />
              {/* <Route path="/male" element={<><Navbar/><Male /><Footer/></>} /> */}
              {/* <Route path="/female" element={<><Navbar/><Female/><Footer/></>} /> */}
              {/* <Route path="/it" element={<><Navbar/><It/><Footer/></>} /> */}
              <Route path="/gold" element={<><Navbar/><Gold/><Footer/></>} />
              <Route path="/cart" element={<><Navbar/><Cart/><Footer/></>} />
              <Route path="/wishlist" element={<><Navbar/><WishList/><Footer/></>} />
              {/* <Route path="/checkout" element={<Checkout/>} /> */}
              
              
              
              
              
            </Routes>
            
          </div>
        </Router>
      </>
    );
  }

export default App;