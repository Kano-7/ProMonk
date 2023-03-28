import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
   const [cart, setcart] = useState({});
   const [Total, setTotal] =useState(0);
   const [ShippingCharges, setShippingCharges] = useState(100);
   const clearCart = () => {
    window.scrollTo(0,0)

    axios.post(
      "https://fake-e-commerce-api.onrender.com/cart/remove",
      {},{
      withCredentials: true,
        },
    ).then((res) => {
      window.location.reload(true)
       return res.data
    })
    toast(" All Items Removed From Cart ",{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
   const removeItem = (id) => {
    window.scrollTo(0,0)
    
    axios.post(
      "https://fake-e-commerce-api.onrender.com/cart/decrease", 
      {
      productId: id,
    },{
      withCredentials: true,
    }).then((res) => {
      window.location.reload(true)
      return res.data
    })
    toast(" One decreased ",{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }
   const addItem = (id) => {
    window.scrollTo(0,0)
    
    console.log(id);
    axios.post(
      "https://fake-e-commerce-api.onrender.com/cart/increase", 
      {
      productId: id,
    },{
      withCredentials: true,
    }).then((res) => {
      window.location.reload(true)
      return res.data
    })
    toast(" One Increased ",{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   } 
   
   const deleteItem = (id) => {
    window.scrollTo(0,0)
     
    axios.post(
      "https://fake-e-commerce-api.onrender.com/cart/delete", 
      {
      productId: id,
    },{
      withCredentials: true,
    }).then((res) => {
      window.location.reload(true)
      return res.data
    })
    toast(" Item Removed From Cart ",{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   }

  useEffect(() => {
    window.scrollTo(0,0)
    axios.get(
      "https://fake-e-commerce-api.onrender.com/cart",
      {
      withCredentials: true,
    },{
      withCredentials: true,
    }).then((res) => {
        // console.log(res);
        console.log(res.data);
        setcart(res?.data?.products);
        setTotal(res?.data)
      return res.data
    })
    // console.log(cart.products);
    // const array = cart.products 
    // console.log('k',array);
    // const productNames = array.map(got => got.product._id);
    // console.log('f',productNames);
  }, [])
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
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {cart.length} items</h5>
                <span className="d-grid gap-2 d-md-flex justify-content-md-end">
 {cart.length > 0  && <button className="btn btn-primary me-md-2" type="button" onClick={clearCart}>
    Clear Cart
  </button>}
  
</span>

              </div>
              <div className="card-body">
                {/* Single item */}
                {cart.length > 0 ? cart.map((got,index)=>{
                  return(
                    <>
                    <div className="row" id="index">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={got.product.image}
                          className="w-100"
                          alt="Blue Jeans Jacket"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>{got.product.name}</strong>
                      </p>
                      <p>Price: {got.price}</p>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                        onClick={() => {deleteItem(got.product._id)}}
                      >
                        <i className="fas fa-trash" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mb-2"
                        data-mdb-toggle="tooltip"
                        title="Move to the wish list"
                      >
                        <i className="fas fa-heart" />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                        <button
                          className="btn btn-primary px-3 me-2"
                          // onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          onClick={() => {removeItem(got.product._id)}}

                        >
                          <i className="fas fa-minus" />
                        </button>
                        <div className="form-outline">
                          <input
                            id="form1"
                            min={0}
                            name="quantity"
                            defaultValue={got.quantity}
                            type="number"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form1">
                            Quantity
                          </label>
                        </div>
                        <button
                          className="btn btn-primary px-3 ms-2"
                          // onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          onClick={() => {addItem(got.product._id)}}

                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                      <p className="text-start text-md-center">
                      </p>
                    </div>
                  </div>
                  <hr className="my-4" /> 
                  </>
                  )
                   
                })
                :( <><span>Ooops no Bananas found</span> <Link to='/product'> Buy new here--!! </Link></>)
                }
                
                
               
                
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p>
                  <strong>We accept</strong>
                </p>
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  className="me-2"
                  width="45px"
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                  alt="PayPal acceptance mark"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                   {Total.total < 0 ? <span>$ 0</span> : <span>${Total.total}</span>}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    {Total.total <= 0 ? <span>$ 0</span> : <span>{ShippingCharges}</span>}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                   {Total.total <= 0 ? <strong> Nan </strong> : <strong>${Total.total + ShippingCharges}</strong> }
                    </span>
                  </li>
                </ul>
                <Link to="/checkout">
                
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Cart;
