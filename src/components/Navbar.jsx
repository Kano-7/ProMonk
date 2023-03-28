import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "./nav.css";
import OffCanvasExample from "./homecomponents/Off";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [drop, setdrop] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const go = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    axios
      .get(`https://fake-e-commerce-api.onrender.com/categories/`)
      .then((response) => {
        let cat = response.data;
        setdrop(cat);
        // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logout = () => {
    axios
      .get("https://fake-e-commerce-api.onrender.com/logout", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data == "logged out") {
          localStorage.removeItem("user");
          localStorage.removeItem("wishlistItems");
          go("/");
        } else {
          alert(res.data !== "" ? res.data : "404");
        }
      });
  };
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");

    if (window.pageYOffset > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  return (
    <>
      <>
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            position: "fixed",
            zIndex: "999",
            top: "0",
            width: "100%",
            backgroundColor: "#e3f2fd",
          }}
        >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Navbar brand */}
              <Link className="navbar-brand" to="/home">
                <span
                  className="material-symbols-outlined"
                  width={35}
                  height={35}
                >
                  storefront
                </span>{" "}
                ProMonk
              </Link>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/product">
                    All Products
                  </Link>
                </li>
                <li className="nav-item">
                  <NavDropdown
                    title="Categories"
                    id="basic-nav-dropdown dropdown-autoclose-true"
                    style={{ maxHeight: "28px" }}
                  >
                    {drop.map((elements, index) => {
                      return (
                        <NavDropdown.Item
                          as={Link}
                          to="/gold"
                          state={{ from: `${elements}` }}
                          key={index}
                        >
                          {elements}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
            <div className="d-flex align-items-center">
              <div>
                <OffCanvasExample />
              </div>
              {/* Icon */}
              <Link className="nav-link me-3" to="/cart" data-mdb-toggle="tooltip"
                      title="Go to cart">
                <i className="fas fa-shopping-cart" />
              </Link>
              {/* Notifications */}
              <div className="dropdown">
                <Link
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                      title="Notification"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              {/* Avatar */}
              <div className="dropdown">
                <Link
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  to="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={userData.userImage}
                    className="rounded-circle"
                    height={25}
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      My profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/wishlist">
                      WishList
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/orderList">
                      My Orders
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="#">
                      Settings
                    </Link>
                  </li> */}
                  <li>
                    <button className="dropdown-item" onClick={() => logout()}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
    </>
  );
}

export default Navbar;

// old navbar

{
  /* <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar-light"
        style={{
          position: "fixed",
          zIndex: "999",
          top: "0",
          width: "100%",
          backgroundColor: "#e3f2fd",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/product">
            <span className="material-symbols-outlined" width={35} height={35}>
              storefront
            </span>{" "}
            ProMonk
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/product"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <NavDropdown
                  title="Categories"
                  id="basic-nav-dropdown dropdown-autoclose-true"
                  style={{ maxHeight: "28px" }}
                >
                  {drop.map((elements, index) => {
                    return (
                      <NavDropdown.Item
                        as={Link}
                        to="/gold"
                        state={{ from: `${elements}` }}
                        key={index}
                      >
                        {elements}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              </li>
            </ul>
            <div className="d-flex align-items-center">
             
              <Link className="nav-link me-3" to="/cart">
                <span className="material-symbols-outlined">
                  shopping_cart_checkout
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav> */
}
