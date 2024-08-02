import React from "react";

function RightSection({ imageUrl, productName, productDescrption, learnMore }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5 d-flex align-self-center flex-column">
          <h1>{productName}</h1>
          <p>{productDescrption}</p>
          <a href={learnMore} style={{ textDecoration: "none", color: "#387ed1" }}>
            Learn More <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
