import React from "react";
import { useEffect, useState } from "react";
import Productitem from "./Productitem";
import axios from "axios";
import Spinner from "./Spinner";

const Female = () => {
  const [male, setMale] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0,0)
    axios
      .get(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((response) => {
        setMale(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {" "}
      <div className="container my-5">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h2 style={{ paddingTop: "25px" }}>
              {" "}
              Hey Promonks see new Bananas here-- Grab Fast!!!
            </h2>
            <div className="row">
              {male.map((elements, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <Productitem
                      title={elements.title ? elements.title.slice(0, 45) : ""}
                      discription={
                        elements.description
                          ? elements.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={elements.image}
                      id={elements.id}
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
export default Female;
