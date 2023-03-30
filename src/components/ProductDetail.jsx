import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import { ToastContainer, toast } from 'react-toastify';
import User from "./homecomponents/User";
const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rate, setrate] = useState('');
  const [view, setview] = useState('');

  const location = useLocation();
  const ID = location.state.from;
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
  };
   const feedback = (e) =>{
       setrate(e.target.id);       
   }
   const feedbacks = (e) =>{
     setview(e.target.value);
   }
  const addView = (id) => {
    axios.post(
      `https://fake-e-commerce-api.onrender.com/product/reviews/${id}/add`,
       {
      review: view,
      rating: rate,
    },{
      withCredentials: true,
    }).then((res) => {
      toast.success('FeedBack Submitted Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setrate('');       
      setview(''); 
      return res.data
    })
  }

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    axios
      .get(`https://fake-e-commerce-api.onrender.com/product/${ID}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
       <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
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
        <div className="container mt-5" style={{ paddingTop: "58px" }}>
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              <img
                src={data.image}
                className="img-fluid"
                alt=""
                style={{ width: "400px", height: "400px" }}
              />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6 mb-4">
              {/*Content*/}
              <div className="p-4">
                <div className="mb-3">
                  <a href="">
                    <span className="badge bg-dark me-1">{data.category}</span>
                  </a>
                  <a href="">
                    <span className="badge bg-info me-1">New</span>
                  </a>
                  <a href="">
                    <span className="badge bg-danger me-1">
                      {data.subcategory}
                    </span>
                  </a>
                </div>
                <p className="lead">
                  <span className="me-1">
                    <del> {data.price * 2} $ </del>
                  </span>
                  <span>{data.price} $</span>
                </p>
                <strong>
                  <p style={{ fontSize: 20 }}>{data.name}</p>
                </strong>
                <p style={{ height: "250px", overflowY: "scroll" }}>
                  {data.description}
                </p>
                <form className="d-flex justify-content-left">
                  {/* Default input */}
                  <div className="form-outline me-1" style={{ width: 100 }}>
                    <input
                      type="number"
                      defaultValue={1}
                      className="form-control"
                    />
                  </div>
                  <Link
                    className="btn btn-primary ms-1"
                    type="submit"
                    onClick={() => {
                      addToCart(data._id);
                    }}
                    to="/product"
                  >
                    Add to cart
                    <i className="fas fa-shopping-cart ms-1" />
                  </Link>
                  
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                      style={{marginLeft:'8px'}}
                    >
                      Say about product
                    </button>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog mx-0 mx-sm-auto">
                        <div className="modal-content">
                          <div className="modal-header bg-primary">
                            <h5
                              className="modal-title text-white"
                              id="exampleModalLabel"
                            >
                              Feedback request
                            </h5>
                            <button
                              type="button"
                              className="btn-close text-white"
                              data-mdb-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="text-center">
                              <i className="far fa-file-alt fa-4x mb-3 text-primary" />
                              <p>
                                <strong>Your opinion matters</strong>
                              </p>
                              <p>
                                Have some ideas how to improve our product?
                                <strong>Give us your feedback.</strong>
                              </p>
                            </div>
                            <hr />
                            <form className="px-4" action="">
                              <p className="text-center">
                                <strong>Your rating:</strong>
                              </p>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleForm"
                                  id="5"
                                  onChange={feedback}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio4Example1"
                                >
                                  Very good
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleForm"
                                  id="4"
                                  onChange={feedback}

                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio4Example2"
                                >
                                  Good
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleForm"
                                  id="3"
                                  onChange={feedback}

                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio4Example3"
                                >
                                  Medicore
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleForm"
                                  
                                  onChange={feedback}
                                   
                                  id="2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio4Example4"
                                >
                                  Bad
                                </label>
                              </div>
                              <div className="form-check mb-2">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="exampleForm"
                                  id="1"
                                  onChange={feedback}

                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="radio4Example5"
                                >
                                  Very bad
                                </label>
                              </div>
                              <p className="text-center">
                                <strong>What could we improve?</strong>
                              </p>
                              {/* Message input */}
                              <div className="form-outline mb-4">
                                <textarea
                                  className="form-control"
                                  id="form4Example4"
                                  rows={4}
                                  defaultValue={""}
                                  onChange={feedbacks}

                                />
                                <label
                                  className="form-label"
                                  htmlFor="form4Example4"
                                >
                                  Your feedback
                                </label>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-outline-primary"
                              data-mdb-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={()=>{addView(data._id)}}>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                </form>
              </div>
              {/*Content*/}
            </div>
            {/*Grid column*/}
          </div>
          {/*Gri
           */}
           <User Data={data}/>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
