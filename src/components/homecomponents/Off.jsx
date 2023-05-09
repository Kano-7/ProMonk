import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link
        variant="primary"
        // onClick={handleShow}
        className="me-2"
        // style={{ width: "24px", height: "38px" }}
      >
        <span className="material-symbols-outlined" onClick={handleShow}>
          filter_alt
        </span>
      </Link>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Fillters </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row justify-content-start">
              
          Comeing Soon.....
          </div>
          {/* <div
            className="row justify-content-start"
            id="filter-sort-example-filters"
            data-mdb-auto-filter="true"
          >
            <div className="col-md-6" data-mdb-filter="color">
              <span className="fa-lg">Filter: Color</span>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterSortRadioOptions"
                  id="filterSortRadio1"
                  defaultValue="black"
                />
                <label className="form-check-label" htmlFor="filterSortRadio1">
                  Black
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterSortRadioOptions"
                  id="filterSortRadio2"
                  defaultValue="red"
                />
                <label className="form-check-label" htmlFor="filterSortRadio2">
                  Red
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterSortRadioOptions"
                  id="filterSortRadio3"
                  defaultValue="blue"
                />
                <label className="form-check-label" htmlFor="filterSortRadio3">
                  Blue
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterSortRadioOptions"
                  id="filterSortRadio4"
                  defaultValue="gray"
                />
                <label className="form-check-label" htmlFor="filterSortRadio4">
                  Gray
                </label>
              </div>
            </div>
            <div className="col-md-6" data-mdb-filter="sale">
              <span className="fa-lg mb-5">Filter: Sale</span>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterSortRadioOptions2"
                  id="filterSortRadio5"
                  defaultValue="yes"
                />
                <label className="form-check-label" htmlFor="filterSortRadio5">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="filterSortRadioOptions2"
                  id="filterSortRadio6"
                  defaultValue="no"
                />
                <label className="form-check-label" htmlFor="filterSortRadio6">
                  No
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-3"
                id="filterSortReset"
              >
                Clear all filters
              </button>
            </div>
            <div className="col-md-8 my-5">
              <div id="select-wrapper-37695" className="select-wrapper">
                <div className="form-outline">
                  
                  <label
                    className="form-label select-label active"
                    style={{ marginLeft: 0 }}
                  >
                    Sort
                  </label>
                  <span className="select-arrow" />
                  <div className="form-notch">
                    <div className="form-notch-leading" style={{ width: 9 }} />
                    <div
                      className="form-notch-middle"
                      style={{ width: "31.2px" }}
                    />
                    <div className="form-notch-trailing" />
                  </div>
                 
                </div>
                <select
                  className="select select-initialized"
                  id="filter-sort-select"
                >
                  <option value="" disabled="" selected="">
                    Choose category
                  </option>
                  <option value={1}>Product name ascending</option>
                  <option value={2}>Product name descending</option>
                  <option value={3}>Highest price</option>
                  <option value={4}>Lowest price</option>
                </select>
              </div>
            </div>
          </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
