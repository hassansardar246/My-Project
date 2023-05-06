import React from "react";
import Pricing from "./Pricing";

const PricingPage = () => {
  return (
    <>
      <div className="price-main">
        <div className="container-fluid pricing">
          <div className="pricing p-0 m-0">
            <h1 className="position-absolute top-50 start-50 translate-middle fw-bold">
              Our Plans
            </h1>
          </div>
        </div>
      </div>
      <Pricing />
    </>
  );
};

export default PricingPage;
