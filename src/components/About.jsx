import React, { useEffect, useState } from "react";
import icon from "./icon.jpg";
import Heading2 from "./heading/Heading2";
import { Link } from "react-router-dom";
import Product from "./Product";
import axios from "axios";
import DSCO7713 from "./DSC07713.JPG";
import { ToastContainer, toast } from "react-toastify";
const About = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [topProduct, settopProduct] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    
    axios
      .get("https://fake-e-commerce-api.onrender.com/product/limit/9/3")
      .then((res) => {
        if (res?.data.length > 0) {
          settopProduct(res?.data);
        }
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
      <div className="container ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 ">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={icon}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={345}
              height={345}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold lh-1 mb-3">
              <Heading2
                head={`Welcome ${userData.name.firstname}, Lets Make World a Store--!`}
              />
            </h2>
            <p className="lead">
              <Heading2
                head={`ProMonk is an innovative e-commerce company that offers a diverse
              range of products across various categories. Our mission is to
              provide our customers with a seamless online shopping experience
              and exceptional customer service. With a focus on quality,
              affordability, and convenience, we strive to exceed our customers'
              expectations every time.`}
                sp={50}
              />
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                to="/product"
              >
                Shop Now
              </Link>
              {/* <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Join Us
              </button> */}
            </div>
          </div>
        </div>
        <h2
          style={{
            borderTop: "3px",
            borderBottom: "3px",
            borderTopStyle: "solid",
            borderBottomStyle: "solid",
            borderColor: "grey",
            marginBottom: "27px",
            textAlign: "center",
          }}
        >
          Best Sellers
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {topProduct.map((Value, index) => {
            return (
              <div className="col">
                <div
                  className="card h-100"
                  style={{
                    boxShadow: "2px 0px 2px 2px rgba(0, 0, 0, 0.2)",
                    transition: "0.3s",
                  }}
                >
                  <img
                    src={Value.image}
                    className="card-img-top"
                    alt="Skyscrapers"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{Value.name}</h5>
                    <p className="card-text">
                      {Value.description.slice(0, 88)}
                    </p>
                  </div>
                  <div className="card-footer">
                    <Link
                      to="/productDetail"
                      className="btn btn-primary ms-1"
                      state={{ from: `${Value._id}` }}
                    >
                      Read More
                    </Link>
                    {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="gradient-custom">
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <i className="fas fa-quote-left fa-3x text-white" />
              </div>
              <div className="card">
                <div className="card-body px-4 py-5">
                  {/* Carousel wrapper */}
                  <div
                    id="carouselDarkVariant"
                    className="carousel slide carousel-dark"
                    data-mdb-ride="carousel"
                  >
                    {/* Indicators */}
                    <div className="carousel-indicators mb-0">
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={1}
                        aria-label="Slide 1"
                      />
                      <button
                        data-mdb-target="#carouselDarkVariant"
                        data-mdb-slide-to={2}
                        aria-label="Slide 1"
                      />
                    </div>
                    {/* Inner */}
                    <div className="carousel-inner pb-5">
                      {/* Single item */}
                      <div className="carousel-item active">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                  src={userData.userImage}
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width={150}
                                  height={150}
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">
                                  Maria Smantha - Web Developer
                                </h4>
                                <p className="mb-0 pb-3">
                                  I highly recommend Promonk's e-commerce
                                  website to anyone looking for a well-designed,
                                  user-friendly, and reliable online shopping
                                  experience
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single item */}
                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                  src={userData.userImage}
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width={150}
                                  height={150}
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">
                                  Lisa Cudrow - Graphic Designer
                                </h4>
                                <p className="mb-0 pb-3">
                                  The Promonk e-commerce website is
                                  well-designed, easy to navigate, and optimized
                                  for speed and responsiveness. I would
                                  recommend this website to anyone looking for a
                                  great e-commerce experience.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single item */}
                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                  // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                  src={userData.userImage}
                                  className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                  alt="woman avatar"
                                  width={150}
                                  height={150}
                                />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">
                                  John Smith - Marketing Specialist
                                </h4>
                                <p className="mb-0 pb-3">
                                  I would highly recommend the Promonk
                                  e-commerce website to anyone looking to
                                  purchase products online. It is well-designed,
                                  user-friendly, and offers an excellent range
                                  of products. The customer support is
                                  top-notch, and the payment options are secure
                                  and reliable. Promonk is an excellent choice
                                  for anyone looking for a hassle-free online
                                  shopping experience.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Inner */}
                    {/* Controls */}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-mdb-target="#carouselDarkVariant"
                      data-mdb-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* Carousel wrapper */}
                </div>
              </div>
              <div className="text-center mt-4 pt-2">
                <i className="fas fa-quote-right fa-3x text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section>
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="mb-4">Our Team</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Promonk is an innovative e-commerce website that offers a wide
                range of products to customers around the world. Our team is
                dedicated to providing exceptional customer service and
                delivering high-quality products that exceed our customers'
                expectations. With a passion for innovation and a commitment to
                excellence, we strive to make online shopping an enjoyable and
                convenient experience for all.
              </p>
            </div>
          </div>
          <div className="row text-center d-flex align-items-stretch">
            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#9d789b" }}
                />
                <div className="avatar mx-auto bg-white">
                  <img
                    // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    src={DSCO7713}
                    className="rounded-circle img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Kanti Patel</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2" />
                    Meet our Founder and CEO, the visionary leader behind
                    Promonk, a thriving e-commerce website. With years of
                    experience in the industry and a passion for innovation,
                    they have guided our team to success and continue to drive
                    growth with their strategic vision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#7a81a8" }}
                />
                <div className="avatar mx-auto bg-white">
                  <img
                    src="https://avatarfiles.alphacoders.com/123/123713.jpg"
                    className="rounded-circle img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">Shrey Patel</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2" />
                    Meet our Co-Founder, the visionary mind behind
                    Promonk's success in the e-commerce industry. With a passion
                    for innovation and a strong entrepreneurial spirit, they
                    have been a driving force in shaping our team and our
                    company's growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0 d-flex align-items-stretch">
              <div className="card testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: "#6d5b98" }}
                />
                <div className="avatar mx-auto bg-white">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    className="rounded-circle img-fluid"
                  />
                </div>
                <div className="card-body">
                  <h4 className="mb-4">John Smith</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <i className="fas fa-quote-left pe-2" />
                    Delectus impedit saepe officiis ab aliquam repellat rem unde
                    ducimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
