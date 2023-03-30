import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
const User= ({Data}) => {
    //  console.log( Data?.rate?.reviews);
    //  const tota = Data?.rate?.reviews.reduce((acc, obj) => acc + obj.rating, 0);
    //   console.log(tota/Data?.rate?.reviews.length);
    // const total = Data?.rate?.reviews?.rating?.reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue;
    //   });
    //   console.log('abc',total);
  return (
    <>
        <section>
  <div className="row text-center">
    <div className="col-md-12">
      {/* Carousel wrapper */}
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-dark"
        data-mdb-ride="carousel"
      >
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          {Data?.rate?.reviews.length > 0 && Data?.rate?.reviews.map((elements,index)=>{
            return(
                <div className="carousel-item active" key={index}>
            <p className="lead font-italic mx-4 mx-md-5">
              { elements.review}

              <div 
              style={{paddingLeft:'450px'}}
              >  
                <ReactStars
                  count={elements.rating}
                  size={30}
                  edit={false}
                  value={5}
                  color2={'#ffd700'}
                />
              </div>
              {/* <ReactStars
               count={5}
                // onChange={ratingChanged}s
                  size={30}
                 color2={'#ffd700'} /> */}
            </p>
            
            {/* <div className="mt-5 mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid shadow-1-strong"
                alt="smaple image"
                width={100}
                height={100}
              />
            </div> */}
            <p className="text-muted mb-0">- {elements.name}</p>
          </div>
            )
         })} 

        </div>
        {/* Inner */}
        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel wrapper */}
    </div>
  </div>
</section>


    </>
  )
}

export default User