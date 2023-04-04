// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import React from "react";
import { Chart } from "react-google-charts";

const OrderList = () => {
  const data = [
    ["State", "Orders"],
    ["Chhattisgarh", 2000],
    ["Bihar", 3000],
    ["Ladakh", 4000],
    ["Jammu and Kashmir", 800],
    ["Goa", 600],
    ["Gujarat", 15000],
    ["Rajasthan", 1000],
    ["Kerela", 1500],
    ["Uttar Pradesh", 2000],
    ["Maharashtra", 3000],
    ["Odisha", 4000],
    ["Tamil Nadu", 5000],
    ["Telangana", 6000],
    ["Uttarakhand", 7000],
    ["West Bengal", 8000],
    ["Andaman and Nicobar Islands", 9000],
    ["Chandigarh", 10000],
    ["Puducherry", 11000],
    ["Delhi", 12000],
    ["Madhya Pradesh", 11000],
    ["Punjab", 110],

  ];
  // const [order, setorder] = useState([])
  // useEffect(() => {
  //     axios.get(
  //         "https://fake-e-commerce-api.onrender.com/orders/5f9f1b9b9b9bb9b9b",
  //         {
  //         withCredentials: true,
  //       }).then((res) => {
  //         return res.data
  //       })
  // }, [])
  // console.log(order);

  const options = {
    width: "auto",
    region: "IN",
    resolution: "provinces",
    displayMode: 'regions',
    colorAxis: { colors: ["#AFD3FF", "#9AC6FD"] },
  };
  return (
    <>
      <div className="container"><h2 style={{ marginTop: "60px" }}> We are currently available here.... </h2>
      <Chart chartType="GeoChart" 
      data={data} 
      options={options} /></div>
      
      {/* table for listing order */}
      {/* <table className="table align-middle mb-0 bg-white" style={{marginTop:'60px'}}>
  <thead className="bg-light">
    <tr>
      <th>Name</th>
      <th>Title</th>
      <th>Status</th>
      <th>Position</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: 45, height: 45 }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Software engineer</p>
        <p className="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">
          Active
        </span>
      </td>
      <td>Senior</td>
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Consultant</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline">
          Onboarding
        </span>
      </td>
      <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">
          Awaiting
        </span>
      </td>
      <td>Senior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
  </tbody>
</table> */}
    </>
  );
};

export default OrderList;
