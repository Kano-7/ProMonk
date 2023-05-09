
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Invoice from "./Invoice";
function Check() {
  const [cart, setcart] = useState({});
  const [Total, setTotal] = useState(0);
  const [paymentMethod, setpaymentMethod] = useState('')
  const [note, setnote] = useState('')
  const userData = JSON.parse(localStorage.getItem("user"));
  const invoiceRef = useRef();
  const handlePrint = () => {
    const invoiceContent = invoiceRef.current.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = invoiceContent;
    window.print();
    document.body.innerHTML = originalContent;
  };
  const palceOrder = (data,method,info) => {
    let AddressData = data.address.street + data.address.city + data.address.state + data.address.country;
    let Phone = data.phone
    axios.post(
      "https://fake-e-commerce-api.onrender.com/orders/",
       {
      to: AddressData,
      phone: '1234567890',
      payment: method,
      notes: "string that will be notes of the order and it is optional",
    },{
      withCredentials: true,
    }).then((res) => {
        
      console.log('abd',res);
      toast.success('Order Placed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.reload(true)
       
      return res.data
    }).catch((error) => {
      toast.warn('Your Cart is empty Order cant be placed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  }
  const radioValueChanged = (e) => {
   setpaymentMethod(e.target.id)
    console.log(paymentMethod);   
  }
  const notes = (e) => {
    setnote(e.target.value)
  }
  useEffect(() => {
    axios
      .get(
        "https://fake-e-commerce-api.onrender.com/cart",
        {
          withCredentials: true,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        setcart(res?.data?.products);
        setTotal(res?.data?.total);
        return res.data;
      });
  }, []);
  return (
    <>
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
  <div className="bg-primary">
    <div className="container py-4">
      {/* Breadcrumb */}
      <nav className="d-flex">
        <h6 className="mb-0">
          <a href="" className="text-white-50">
            Home
          </a>
          <span className="text-white-50 mx-2"> &gt; </span>
          <a href="" className="text-white-50">
            2. Shopping cart
          </a>
          <span className="text-white-50 mx-2"> &gt; </span>
          <a href="" className="text-white">
            <u>3. Order info</u>
          </a>
          <span className="text-white-50 mx-2"> &gt; </span>
          <a href="" className="text-white-50">
            4. Payment
          </a>
        </h6>
      </nav>
      {/* Breadcrumb */}
    </div>
  </div>
  {/* Heading */}
  <section className="bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-8 mb-4">
          {/* <div className="card mb-4 border shadow-0">
            <div className="p-4 d-flex justify-content-between">
              <div className="">
                <h5>Have an account?</h5>
                <p className="mb-0 text-wrap ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                <a
                  href="#"
                  className="btn btn-outline-primary me-0 me-md-2 mb-2 mb-md-0 w-100"
                >
                  Register
                </a>
                <a
                  href="#"
                  className="btn btn-primary shadow-0 text-nowrap w-100"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div> */}
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/monkey-face.png"
              alt=""
              width={72}
              height={57}
            />

            <h2>Bill--A--Banana</h2>
            <p className="lead">
              Thank you for choosing ProMonk, Your satisfaction is our top
              priority. Please verify your order details below, And complete
              your purchase securely.
            </p>
          </div>
          {/* Checkout */}
          <div className="card shadow-0 border">
            <div className="p-4">
              <h5 className="card-title mb-3">ProMonk Checkout</h5>
              <div className="row">
                <div className="col-6 mb-3">
                  <p className="mb-0">First name</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Type here"
                      defaultValue={userData.name.firstname}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <p className="mb-0">Last name</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Type here"
                      defaultValue={userData.name.lastname}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <p className="mb-0">Phone</p>
                  <div className="form-outline">
                    <input
                      type="tel"
                      id="typePhone"
                      defaultValue= {userData.phone}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <p className="mb-0">Email</p>
                  <div className="form-outline">
                    <input
                      type="email"
                      id="typeEmail"
                      placeholder="example@gmail.com"
                      defaultValue={userData.email}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Keep me up to date on news
                </label>
              </div>
              <hr className="my-4" />
              <h5 className="card-title mb-3">Shipping info</h5>
              <div className="row mb-3">
                <div className="col-lg-4 mb-3">
                  {/* Default checked radio */}
                  <div className="form-check h-100 border rounded-3">
                    <div className="p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Express delivery <br />
                        <small className="text-muted">
                          3-4 days via Fedex{" "}
                        </small>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  {/* Default radio */}
                  <div className="form-check h-100 border rounded-3">
                    <div className="p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Post office <br />
                        <small className="text-muted">
                          20-30 days via post{" "}
                        </small>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  {/* Default radio */}
                  <div className="form-check h-100 border rounded-3">
                    <div className="p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        Self pick-up <br />
                        <small className="text-muted">Come to our shop </small>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 mb-3">
                  <p className="mb-0">Address</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Type here"
                      defaultValue={userData.address.street + "," + userData.address.city}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <p className="mb-0">City</p>
                  <select className="form-select">
                    <option value={1}>{userData.address.city}</option>
                    <option value={2}>Rajkot</option>
                    <option value={3}>Surat</option>
                    <option value={4}>Ahmedabad</option>
                    <option value={5}>Anand</option>
                  </select>
                </div>
                {/* <div className="col-sm-4 mb-3">
                  <p className="mb-0">House</p>
                  <div className="form-outline">
                    <input
                      type="text"
                      id="typeText"
                      placeholder="Type here"
                      className="form-control"
                    />
                  </div>
                </div> */}
                {/* <div className="col-sm-4 col-6 mb-3">
                  <p className="mb-0">Postal code</p>
                  <div className="form-outline">
                    <input type="text" id="typeText" className="form-control" />
                  </div>
                </div> */}
                <div className="col-sm-4 col-6 mb-3">
                  <p className="mb-0">Zip</p>
                  <div className="form-outline">
                    <input type="text" id="typeText" className="form-control" defaultValue="363010"/>
                  </div>
                </div>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault1"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                  Save this address
                </label>
              </div>
              <h5 className="mb-3">Payment</h5>
              <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked=""
                      required=""
                      onChange={radioValueChanged}
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                      onChange={radioValueChanged}
                    />
                    <label className="form-check-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="Cash On Delivery"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required=""
                      onChange={radioValueChanged}
                    />
                    <label className="form-check-label" htmlFor="paypal">
                    Cash On Delivery
                    </label>
                  </div>
                </div>
                {(paymentMethod == 'credit'  || paymentMethod == 'debit') ? <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small className="text-body-secondary">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      {paymentMethod} number is required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div> : ''}
              <div className="mb-3">
                <p className="mb-0">Message to seller</p>
                <div className="form-outline">
                  <textarea
                    className="form-control"
                    id="textAreaExample1"
                    rows={2}
                    placeholder="write here"
                    onChange={notes}

                  />
                </div>
              </div>
              <div className="float-end">
                <button className="btn btn-light border">Cancel</button>
                <button className="btn btn-success shadow-0 border" onClick={()=>{
                  // sendConfirmationEmail()
                  // handlePrint()
                  palceOrder(userData,paymentMethod,note)}}>
                  Place Order
                </button>
                <button className="btn btn-success shadow-0 border" onClick={()=>{
                  // sendConfirmationEmail()
                  handlePrint()}}>
                  Invoice
                </button>
                <div style={{ display: 'none' }}>
        <div ref={invoiceRef}>
          <Invoice />
        </div>
      </div>
              </div>
            </div>
          </div>
          {/* Checkout */}
        </div>
        <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
          <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxWidth: 320 }}>
            <h6 className="mb-3">Summary</h6>
            <div className="d-flex justify-content-between">
              <p className="mb-2">Total price:</p>
              <p className="mb-2">${Total}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="mb-2">Discount:</p>
              {/* <p className="mb-2 text-danger">- $60.00</p> */}
              {Total > 1500 ? (
                      <p className="text-success">−$150</p>
                    ) : <p className="text-success">−$5</p>}
            </div>
            <div className="d-flex justify-content-between">
              <p className="mb-2">Shipping cost:</p>
              <p className="mb-2">+ $100.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p className="mb-2">Total price:</p>
              {/* <p className="mb-2 fw-bold">${Total + 100 - 60}.00</p> */}
              {Total > 1500 ? <p className="mb-2 fw-bold">${Total + 100 - 150}.00</p> : <p className="mb-2 fw-bold">${Total + 100 - 5}.00</p>}
            </div>
            <div className="input-group mt-3 mb-4">
              <input
                type="text"
                className="form-control border"
                name=""
                placeholder="Promo code"
              />
              <button className="btn btn-light text-primary border">
                Apply
              </button>
            </div>
            <hr />
            <h6 className="text-dark my-4">Items in cart</h6>
            {cart.length > 0 ? (
                  cart.map((got, index) => {
                    return (
            <div className="d-flex align-items-center mb-4" key={index}>
              <div className="me-3 position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                  {got?.quantity}
                </span>
                <img
                  src={got?.product?.image}
                  style={{ height: 96, width: "96x" }}
                  className="img-sm rounded border"
                />
              </div>
              <div className="">
                <a href="#" className="nav-link">
                  {got?.product?.name} <br />
                  
                </a>
                  
                <div className="price text-muted">Total: ${got?.price}</div>
              </div>
            </div>
             );
            })
          ) : (
            <li className="list-group-item d-flex justify-content-between lh-sm">
              
              Cart Is Empty
            </li>
          )}
            {/* <div className="d-flex align-items-center mb-4">
              <div className="me-3 position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                  1
                </span>
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                  style={{ height: 96, width: "96x" }}
                  className="img-sm rounded border"
                />
              </div>
              <div className="">
                <a href="#" className="nav-link">
                  Apple Watch Series 4 Space <br />
                  Large size
                </a>
                <div className="price text-muted">Total: $217.99</div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="me-3 position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                  3
                </span>
                <img
                  src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp"
                  style={{ height: 96, width: "96x" }}
                  className="img-sm rounded border"
                />
              </div>
              <div className="">
                <a href="#" className="nav-link">
                  GoPro HERO6 4K Action Camera - Black
                </a>
                <div className="price text-muted">Total: $910.00</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <footer className="my-5 pt-5 text-body-secondary text-center text-small">
          <p className="mb-1">© 2017–2023 ProMonk</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </footer>
  </section>
</>

    </>
  )
}

export default Check