import React from "react";
import { useEffect, useState } from "react";
import Productitem from "./Productitem";
import axios from "axios";
import Spinner from "./Spinner";
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
const Gold = () => {
  const location = useLocation()
    const { from } = location.state     
  const [male, setMale] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0,0)
    

    axios
      .get(`https://fake-e-commerce-api.onrender.com/product/category/${from}`)
      .then((response) => {
        setMale(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [from]);

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
      {" "}
      <div className="container my-5">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h2 style={{ paddingTop: "25px" }}>
              {" "}
              Hey Promonks see new {from} here-- Grab Fast!!!
            </h2>
            <div className="row">
              {male.map((elements, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <Productitem
                      title={elements.name ? elements.name.slice(0, 45) : ""}
                      discription={
                        elements.description
                          ? elements.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={elements.image}
                      id={elements._id}
                      price={elements.price}
                      sub={elements.subcategory}
                      data={elements}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>{" "}
    </>
  );
};
export default Gold;
