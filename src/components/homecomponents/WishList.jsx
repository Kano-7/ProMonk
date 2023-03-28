import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const WishList = () => {
  // const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const handleDeleteItem = (index) => {
    const newWishlistItems = [...wishlist];
    newWishlistItems.splice(index, 1);
    setWishlist(newWishlistItems);
    localStorage.setItem("wishlistItems", JSON.stringify(newWishlistItems));
    toast(" Removed From List",{
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
  
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    // Fetch product data from API
    axios
      .get("https://fake-e-commerce-api.onrender.com/product")
      .then((response) => {
        const products = response.data;
        console.log("abc", products);
        // Get product IDs from local storage
        const wishlistIds =
          JSON.parse(localStorage.getItem("wishlistItems")) || [];
        console.log("bcd", wishlistIds);

        // Match product IDs with API data
        const wishlistProducts = products.filter((product) =>
          wishlistIds.includes(product._id)
        );
        console.log("bca", wishlistProducts);

        // Set wishlist state
        setWishlist(wishlistProducts);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
       <ToastContainer 
                     position="top-right"
                     autoClose={2000}
                     
                     hideProgressBar={true}
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                     theme="light"
                    />
      {loading ? (
        <Spinner />
      ) : (
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="container h-100 py-5">
            <div
              className="row d-flex justify-content-center align-items-center h-100"
              style={{ paddingTop: "45px" }}
            >
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">Wish List</h3>
                  {/* <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>{" "}
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1" />
                    </a>
                  </p>
                </div> */}
                </div>

                {wishlist.map((elements, index) => {
                  return (
                    <div className="card rounded-3 mb-4" key={index}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <Link
                              to="/productDetail"
                              state={{ from: `${elements._id}` }}
                            >
                              <img
                                // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                src={elements.image}
                                className="img-fluid rounded-3"
                                alt="Cotton T-shirt"
                              />
                            </Link>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <Link
                              to="/productDetail"
                              state={{ from: `${elements._id}` }}
                            >
                              <p className="lead fw-normal mb-2">
                                {elements.name}
                              </p>
                            </Link>

                            <p>
                              {/* <span className="text-muted">Price: </span>{elements.price}Rs{" "} */}
                              <span className="text-muted">Quantity: </span>
                              {elements.quantity}
                            </p>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            {/* <button
                            className="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i className="fas fa-minus" />
                          </button> */}
                            {elements.quantity > 0 ? (
                              <span className="badge rounded-pill badge-success">
                                Available
                              </span>
                            ) : (
                              <span className="badge rounded-pill badge-danger">
                                Not Available
                              </span>
                            )}
                            {/* <button
                            className="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i className="fas fa-plus" />
                          </button> */}
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">Rs{elements.price}.00</h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <Link href="#!" className="text-danger" onClick={() => handleDeleteItem(index)} >
                              <i className="fas fa-trash fa-lg" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WishList;
