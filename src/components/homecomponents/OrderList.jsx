// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import React from "react";
import { Chart } from "react-google-charts";



const OrderList = () => {
  // Graph
var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
        lineTension: 0,
        backgroundColor: "transparent",
        borderColor: "#007bff",
        borderWidth: 4,
        pointBackgroundColor: "#007bff",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
});
  const data = [
    ["State", "Customers"],
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
      <div className="container"><h2 style={{ marginTop: "60px" , marginLeft:"150px"}}> We are currently available here.... </h2>
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
     <>
  {/*Main Navigation*/}
  <header>
    {/* Sidebar */}
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3" />
            <span>Main dashboard</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple active"
          >
            <i className="fas fa-chart-area fa-fw me-3" />
            <span>Webiste traffic</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-lock fa-fw me-3" />
            <span>Password</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-line fa-fw me-3" />
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-pie fa-fw me-3" />
            <span>SEO</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-chart-bar fa-fw me-3" />
            <span>Orders</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-globe fa-fw me-3" />
            <span>International</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-building fa-fw me-3" />
            <span>Partners</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-calendar fa-fw me-3" />
            <span>Calendar</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-users fa-fw me-3" />
            <span>Users</span>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-2 ripple"
          >
            <i className="fas fa-money-bill fa-fw me-3" />
            <span>Sales</span>
          </a>
        </div>
      </div>
    </nav>
    {/* Sidebar */}
    {/* Navbar */}
    {/* <nav
      id="main-navbar"
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    >
    
      <div className="container-fluid">
             <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        
        <a className="navbar-brand" href="#">
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            height={25}
            alt=""
            loading="lazy"
          />
        </a>
        
        <form className="d-none d-md-flex input-group w-auto my-auto">
          <input
            autoComplete="off"
            type="search"
            className="form-control rounded"
            placeholder='Search (ctrl + "/" to focus)'
            style={{ minWidth: 225 }}
          />
          <span className="input-group-text border-0">
            <i className="fas fa-search" />
          </span>
        </form>
        
        <ul className="navbar-nav ms-auto d-flex flex-row">
          
          <li className="nav-item dropdown">
            <a
              className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell" />
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          
          <li className="nav-item">
            <a className="nav-link me-3 me-lg-0" href="#">
              <i className="fas fa-fill-drip" />
            </a>
          </li>
          
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fab fa-github" />
            </a>
          </li>
          
          <li className="nav-item dropdown">
            <a
              className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="united kingdom flag m-0" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <i className="united kingdom flag" />
                  English
                  <i className="fa fa-check text-success ms-2" />
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="poland flag" />
                  Polski
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="china flag" />
                  中文
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="japan flag" />
                  日本語
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="germany flag" />
                  Deutsch
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="france flag" />
                  Français
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="spain flag" />
                  Español
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="russia flag" />
                  Русский
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="portugal flag" />
                  Português
                </a>
              </li>
            </ul>
          </li>
          
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                className="rounded-circle"
                height={22}
                alt=""
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
    </nav> */}
    {/* Navbar */}
  </header>
  {/*Main Navigation*/}
  {/*Main layout*/}
  <main style={{ marginTop: 58 }}>
    <div className="container pt-4">
      {/* Section: Main chart */}
      <section className="mb-4">
        <div className="card">
          <div className="card-header py-3">
            <h5 className="mb-0 text-center">
              <strong>Sales</strong>
            </h5>
          </div>
          <div className="card-body">
            <canvas className="my-4 w-100" id='myChart' height={380} />
          </div>
        </div>
      </section>
      {/* Section: Main chart */}
      {/*Section: Sales Performance KPIs*/}
      <section className="mb-4">
        <div className="card">
          <div className="card-header text-center py-3">
            <h5 className="mb-0 text-center">
              <strong>Sales Performance KPIs</strong>
            </h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">Product Detail Views</th>
                    <th scope="col">Unique Purchases</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Product Revenue</th>
                    <th scope="col">Avg. Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Value</th>
                    <td>18,492</td>
                    <td>228</td>
                    <td>350</td>
                    <td>$4,787.64</td>
                    <td>$13.68</td>
                  </tr>
                  <tr>
                    <th scope="row">Percentage change</th>
                    <td>
                      <span className="text-danger">
                        <i className="fas fa-caret-down me-1" />
                        <span>-48.8%%</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fas fa-caret-up me-1" />
                        <span>14.0%</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fas fa-caret-up me-1" />
                        <span>46.4%</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fas fa-caret-up me-1" />
                        <span>29.6%</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-danger">
                        <i className="fas fa-caret-down me-1" />
                        <span>-11.5%</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Absolute change</th>
                    <td>
                      <span className="text-danger">
                        <i className="fas fa-caret-down me-1" />
                        <span>-17,654</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fas fa-caret-up me-1" />
                        <span>28</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fas fa-caret-up me-1" />
                        <span>111</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-success">
                        <i className="fas fa-caret-up me-1" />
                        <span>$1,092.72</span>
                      </span>
                    </td>
                    <td>
                      <span className="text-danger">
                        <i className="fas fa-caret-down me-1" />
                        <span>$-1.78</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/*Section: Sales Performance KPIs*/}
      {/*Section: Minimal statistics cards*/}
      <section>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-pencil-alt text-info fa-3x" />
                  </div>
                  <div className="text-end">
                    <h3>278</h3>
                    <p className="mb-0">New Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="far fa-comment-alt text-warning fa-3x" />
                  </div>
                  <div className="text-end">
                    <h3>156</h3>
                    <p className="mb-0">New Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-chart-line text-success fa-3x" />
                  </div>
                  <div className="text-end">
                    <h3>64.89 %</h3>
                    <p className="mb-0">Bounce Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div className="align-self-center">
                    <i className="fas fa-map-marker-alt text-danger fa-3x" />
                  </div>
                  <div className="text-end">
                    <h3>423</h3>
                    <p className="mb-0">Total Visits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-danger">278</h3>
                    <p className="mb-0">New Projects</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-rocket text-danger fa-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-success">156</h3>
                    <p className="mb-0">New Clients</p>
                  </div>
                  <div className="align-self-center">
                    <i className="far fa-user text-success fa-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-warning">64.89 %</h3>
                    <p className="mb-0">Conversion Rate</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-chart-pie text-warning fa-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-info">423</h3>
                    <p className="mb-0">Support Tickets</p>
                  </div>
                  <div className="align-self-center">
                    <i className="far fa-life-ring text-info fa-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-info">278</h3>
                    <p className="mb-0">New Posts</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-book-open text-info fa-3x" />
                  </div>
                </div>
                <div className="px-md-1">
                  <div
                    className="progress mt-3 mb-1 rounded"
                    style={{ height: 7 }}
                  >
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-warning">156</h3>
                    <p className="mb-0">New Comments</p>
                  </div>
                  <div className="align-self-center">
                    <i className="far fa-comments text-warning fa-3x" />
                  </div>
                </div>
                <div className="px-md-1">
                  <div
                    className="progress mt-3 mb-1 rounded"
                    style={{ height: 7 }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-success">64.89 %</h3>
                    <p className="mb-0">Bounce Rate</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-mug-hot text-success fa-3x" />
                  </div>
                </div>
                <div className="px-md-1">
                  <div
                    className="progress mt-3 mb-1 rounded"
                    style={{ height: 7 }}
                  >
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between px-md-1">
                  <div>
                    <h3 className="text-danger">423</h3>
                    <p className="mb-0">Total Visits</p>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-map-signs text-danger fa-3x" />
                  </div>
                </div>
                <div className="px-md-1">
                  <div
                    className="progress mt-3 mb-1 rounded"
                    style={{ height: 7 }}
                  >
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section: Minimal statistics cards*/}
      {/*Section: Statistics with subtitles*/}
      <section>
        <div className="row">
          <div className="col-xl-6 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <i className="fas fa-pencil-alt text-info fa-3x me-4" />
                    </div>
                    <div>
                      <h4>Total Posts</h4>
                      <p className="mb-0">Monthly blog posts</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">18,000</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <i className="far fa-comment-alt text-warning fa-3x me-4" />
                    </div>
                    <div>
                      <h4>Total Comments</h4>
                      <p className="mb-0">Monthly blog posts</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <h2 className="h1 mb-0">84,695</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <h2 className="h1 mb-0 me-4">$76,456.00</h2>
                    </div>
                    <div>
                      <h4>Total Sales</h4>
                      <p className="mb-0">Monthly Sales Amount</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <i className="far fa-heart text-danger fa-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between p-md-1">
                  <div className="d-flex flex-row">
                    <div className="align-self-center">
                      <h2 className="h1 mb-0 me-4">$36,000.00</h2>
                    </div>
                    <div>
                      <h4>Total Cost</h4>
                      <p className="mb-0">Monthly Cost</p>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <i className="fas fa-wallet text-success fa-3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section: Statistics with subtitles*/}
    </div>
  </main>
  {/*Main layout*/}
</>

    </>
  );
};

export default OrderList;
