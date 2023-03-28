import React, { Component } from "react";
import Productitem from "./Productitem";
import { RotatingLines } from "react-loader-spinner";
import { css } from "@emotion/react";
import Heading from "./heading/Heading";
// import HomeBanner from "./homecomponents/HomeBanner";
import { ToastContainer, toast } from 'react-toastify';
export default class Product extends Component {
  //
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
    this.override = css`
      display: block;
      margin: 0 auto;
    `;
    
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    let url = "https://fake-e-commerce-api.onrender.com/product";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData, loading: false });
  }

  render() {
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
          {this.state.loading ? (
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
                  css={this.override}
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
                </h5>
                {/* <HomeBanner/> */}
              </div>
              <div className="row">
                {this.state.articles.map((elements, index) => {
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
}
