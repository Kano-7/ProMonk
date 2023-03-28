import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Spinner from "./Spinner";
const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const ID = location.state.from
  const addToCart = (id) => {
    console.log('abcd',id);
    axios.post(
      "https://fake-e-commerce-api.onrender.com/cart/add",
       {
      productId: id,
    },{
      withCredentials: true,
    }).then((res) => {
        console.log(res.data);
      return res.data
    }).catch((error) => {
      console.log(error);
    });
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
                  <Link className="btn btn-primary ms-1" type="submit" onClick={()=>{addToCart(data._id)}} to='/product' >
                    Add to cart
                    <i className="fas fa-shopping-cart ms-1" />
                  </Link>
                </form>
              </div>
              {/*Content*/}
            </div>
            {/*Grid column*/}
          </div>
          {/*Gri
           */}
        </div>
      )}
    </>
  );
};

export default ProductDetail;
