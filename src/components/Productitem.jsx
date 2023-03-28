import axios from "axios";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Productitem = ({ title, discription, imageUrl, id, price, sub }) => {
  const addToCart = (id) => {
    console.log("abcd", id);
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/cart/add",
        {
          productId: id,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
    toast(" Added to Cart!!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  function handleWishlistClick(productId) {
    console.log(productId);
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    // add the product ID to the wishlist items array
    if (wishlistItems.includes(productId)) {
      return;
    } else {
      wishlistItems.push(productId);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      toast(" Added to Wishlist!!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <div className="my-3">
        <div
          className="card"
          style={{
            boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.2)",
            transition: "0.3s",
          }}
        >
          {" "}
          {/* //width: "18rem", */}
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill badge-danger"
            style={{ left: "78%", zIndex: "1" }}
          >
            {sub}
          </span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ width: "288px", height: "288px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <Link
              to="/productDetail"
              className="btn  btn-sm btn-primary"
              state={{ from: `${id}` }}
              data-mdb-toggle="tooltip"
                      title="Get More Details"
            >
               More
            </Link>
            <span>
              <span className="me-1">
                <del> {price * 2} $ </del>
              </span>
              <span>{price}$</span>
            </span>
          </div>
          <button
            type="button"
            className="btn btn-danger btn-sm mb-2"
            data-mdb-toggle="tooltip"
            title="Move to the wish list"
            onClick={() => handleWishlistClick(id)}
          >
            <i className="fas fa-heart" />
          </button>
          <Link
            className="btn btn-primary btn-sm mb-2"
            type="submit"
            data-mdb-toggle="tooltip"
            title="Add to cart"
            onClick={() => addToCart(id)}
            to="/product"
          >
            {/* Add to cart */}
            <i className="fas fa-shopping-cart ms-1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Productitem;
