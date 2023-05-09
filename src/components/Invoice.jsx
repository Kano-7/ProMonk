import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Invoice = () => {
    const [cart, setcart] = useState({});
    const [Total, setTotal] = useState(0);
    const [paymentMethod, setpaymentMethod] = useState('')
  const userData = JSON.parse(localStorage.getItem("user"));
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
        <div className="card">
  <div className="card-body">
    <div className="container mb-5 mt-3">
      <div className="row d-flex align-items-baseline">
        <div className="col-xl-9">
          <p style={{ color: "#7e8d9f", fontSize: 20 }}>
            Invoice &gt;&gt; <strong>ID: #123-123</strong>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="text-center">
            
              <img
              className="d-block mx-auto mb-4"
              src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/monkey-face.png"
              alt=""
              width={72}
              height={57}
                 />
            
            <p className="pt-2"></p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8">
            <ul className="list-unstyled">
              <li className="text-muted">
                To: <span style={{ color: "#8f8061" }}>{userData.name.firstname} {userData.name.lastname}</span>
              </li>
              <li className="text-muted">{userData.address.street}, {userData.address.city}</li>
              <li className="text-muted">{userData.address.state}, {userData.address.country}</li>
              <li className="text-muted">
                <i className="fas fa-phone" /> {userData.phone}
              </li>
            </ul>
          </div>
          <div className="col-xl-4">
            <p className="text-muted">Invoice</p>
            <ul className="list-unstyled">
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#8f8061" }} />{" "}
                <span className="fw-bold">ID:</span>#123-456
              </li>
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#8f8061" }} />{" "}
                <span className="fw-bold">Creation Date: </span>April 29,2023
              </li>
              <li className="text-muted">
                <i className="fas fa-circle" style={{ color: "#8f8061" }} />{" "}
                <span className="me-1 fw-bold">Status:</span>
                <span className="badge bg-warning text-black fw-bold">
                Cash On Delivery
                </span>
              </li>
            </ul>
          </div>
        </div>
        
       
        <div class="row my-2 mx-1 justify-content-center">
        <table class="table table-striped table-borderless">
          <thead style={{backgroundColor:'#84B0CA' }} class="text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Qty</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
          {cart.length > 0 ? (
          cart.map((got, index) => {
                    return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{got?.product?.name}</td>
              <td>{got?.quantity}</td>
              <td>{got?.price}</td>
              <td>{got?.quantity * got?.price}</td>
            </tr>) } ) ) : "" }
          </tbody>

        </table>
      </div>
  
        <hr />
        <div className="row">
          <div className="col-xl-8">
            <p className="ms-3">Add additional notes and payment information</p>
          </div>
          <div className="col-xl-3">
            <ul className="list-unstyled">
              <li className="text-muted ms-3">
                <span className="text-black me-4">SubTotal</span>${Total}
              </li>
              <li className="text-muted ms-3 mt-2">
                <span className="text-black me-4">Shipping + Discount</span>
              </li>
            </ul>
            <p className="text-black float-start">
              <span className="text-black me-3"> Total Amount</span>
              {Total > 1500 ? (
                      <span  style={{ fontSize: 25 }}>${Total + 100 - 150}</span>
                    ) : <span  style={{ fontSize: 25 }}>${Total + 100 - 5}</span>}
              
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Invoice