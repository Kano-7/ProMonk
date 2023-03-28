
import { RotatingLines } from "react-loader-spinner";
import React from "react";

const Spinner = () => {
  
  return (
    <>
      <>
      
        <div style={{ paddingLeft: "500px", paddingBottom:"162px", paddingTop:"213px" }}>
          <RotatingLines
            strokeColor="red"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            // css={}
            className="align-content-center"
          />
        </div>
      </>
    </>
  );
};

export default Spinner;
