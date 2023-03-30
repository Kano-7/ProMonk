import React, { useEffect, useState } from "react";
import Productitem from "./Productitem";
import { RotatingLines } from "react-loader-spinner";
// import { css } from "@emotion/react";
import Heading from "./heading/Heading";
// import HomeBanner from "./homecomponents/HomeBanner";
import { ToastContainer } from "react-toastify";
import axios from "axios";
function Products() {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [search, setsearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("https://fake-e-commerce-api.onrender.com/product")
      .then((res) => {
        setarticles(res.data);
        setloading(false);
        return res.data;
      });
  }, []);
  const value = (e) => {
    setsearch(e.target.value);
  };
//   const handleSearch = (search) => {
//     axios
//       .get(`https://fake-e-commerce-api.onrender.com/product/search/${search}`)
//       .then((res) => {
//         setarticles(res.data);
//         return res.data;
//       });
//   };
  const filteredRows = articles.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
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
      <div className="container my-5">
        {loading ? (
          <>
            <div
              style={{
                paddingLeft: "500px",
                paddingBottom: "162px",
                paddingTop: "213px",
              }}
            >
              <RotatingLines
                strokeColor="red"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                //   css={this.override}
                className="align-content-center"
              />
            </div>
          </>
        ) : (
          <>
            <div className="container">
              <h5 style={{ paddingTop: "25px" }}>
                {" "}
                <Heading />
                <div
                  className="input-group"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                >
                  <div className="form-outline">
                    <input
                      type="search"
                      id="form1"
                      className="form-control"
                      onChange={value}
                    />
                    <label className="form-label" htmlFor="form1">
                      Search
                    </label>
                  </div>
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                  {/* <button type="button" className="btn btn-primary" onClick={() => {handleSearch(search)}}>
                    <i className="fas fa-search" />
                  </button> */}
                </div>
              </h5>
              {/* <HomeBanner/> */}
            </div>
            <div className="row">
              {filteredRows.map((elements, index) => {
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
      </div>
    </>
  );
}

export default Products;
