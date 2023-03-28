import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CheckOut = () => {
  const [cart, setcart] = useState({});
  const [Total, setTotal] = useState(0);
  const [paymentMethod, setpaymentMethod] = useState('')
  const userData = JSON.parse(localStorage.getItem("user"));
  const palceOrder = (data,method) => {
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
      return res.data
    }).catch((error) => {
      alert(error.message)
    });
  }
  const radioValueChanged = (e) => {
   setpaymentMethod(e.target.id)
    console.log(paymentMethod);   
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
        setTotal(res?.data);
        return res.data;
      });
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
      <div className="container" style={{ paddingTop: "50px" }}>
        <main>
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
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">
                  {cart.length}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {cart.length > 0 ? (
                  cart.map((got, index) => {
                    return (
                      <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                          <h6 className="my-0">{got.product.name}</h6>
                          <small className="text-body-secondary">
                            Quantity: {got.quantity}
                          </small>
                        </div>
                        <span className="text-body-secondary">
                          ${got.price}
                        </span>
                      </li>
                    );
                  })
                ) : (
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    {" "}
                    Cart Is Empty{" "}
                  </li>
                )}

                {cart.length > 0 && (
                  <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    {cart.length > 0 && (
                      <span className="text-success">−$5</span>
                    )}
                  </li>
                )}
                {cart.length > 0 && (
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Shipping</span>
                    <strong>$100</strong>
                  </li>
                )}
                {cart.length > 0 && (
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${Total.total - 5 + 100}</strong>
                  </li>
                )}
              </ul>
              {cart.length > 0 && (
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promo code"
                    />
                    <button type="submit" className="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate="">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      disabled ={true}

                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      defaultValue={userData.name.firstname}
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      disabled ={true}
                      
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      defaultValue={userData.name.lastname}
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  {/* <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required=""
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div> */}
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                      <span className="text-body-secondary">*</span>
                    </label>
                    <input
                      disabled ={true}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      defaultValue={userData.email}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone
                      <span className="text-body-secondary">*</span>
                    </label>
                    <input
                      disabled ={true}
                      type="email"
                      className="form-control"
                      id="phone"
                      // placeholder="you@example.com"
                      defaultValue= {userData.phone}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      disabled ={true}
                      
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                      defaultValue={userData.address.street}
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">
                      Address 2{" "}
                      <span className="text-body-secondary">(Optional)</span>
                    </label>
                    <input
                      disabled ={true}

                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                      defaultValue={userData.address.city}
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country" required="" 
                      disabled ={true}
                     
                    >
                      <option value="">{userData.address.country}</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select className="form-select" id="state" required=""
                      disabled ={true}
                    
                    >
                      <option value="">{userData.address.state}</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                      defaultValue="363010"
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                  />
                  <label className="form-check-label" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3">Payment</h4>
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
                      Credit card number is required
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
                <hr className="my-4" /> 
                <button  className="w-100 btn btn-primary btn-lg" type="button"  onClick={()=>{palceOrder(userData,paymentMethod)}}>
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </main>
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
      </div>
    </>
  );
};

export default CheckOut;
