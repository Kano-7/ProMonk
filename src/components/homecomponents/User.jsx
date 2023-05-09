
import React from "react";
import ReactStars from "react-stars";
import { AvatarGenerator } from "random-avatar-generator";
const User = ({ Data }) => {
  //  console.log( Data?.rate?.reviews);
  //  const tota = Data?.rate?.reviews.reduce((acc, obj) => acc + obj.rating, 0);
  //   console.log(tota/Data?.rate?.reviews.length);
  // const total = Data?.rate?.reviews?.rating?.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue;
  //   });
  //   console.log('abc',total);
  const generator = new AvatarGenerator();
  const ramImage = generator.generateRandomAvatar();
  return (
    <>
       <div>
        {Data?.rate?.reviews.length > 0 ?
      <div className="row" style={{height:'450px', overflowY:'scroll'}}>
          {Data?.rate?.reviews.map((elements, index) => {
            return (
              <div className="col-xl-4 col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <img
                        src={ramImage}
                        alt=""
                        style={{ width: 45, height: 45 }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{elements.name}</p>
                        <p className="text-muted mb-0">{elements.review}</p>
                        <p className="text-muted mb-0">
                          {" "}
                          <ReactStars
                            count={elements.rating}
                            size={30}
                            edit={false}
                            value={5}
                            color2={"#ffd700"}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) 
        }
      </div>
          : (<><h3>no reviews</h3></>)}
      </div>

      {/* old moving code */}
      {/* <section>
  <div className="row text-center">
    <div className="col-md-12">
      
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-dark"
        data-mdb-ride="carousel"
      >
        
        <div className="carousel-inner">
          
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
            
            </p>
            
            
            <p className="text-muted mb-0">- {elements.name}</p>
          </div>
            )
         })} 

        </div>
      
      
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
      
    </div>
  </div>
</section> */}
    </>
  );
};

export default User;
