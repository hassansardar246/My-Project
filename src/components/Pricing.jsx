import React, {useEffect} from "react";
import { Container } from "react-bootstrap"

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="row text-white d-flex justify-content-center text-center">
        <div className="col-md-6">
          <h1 className="pricing-h1"> Choose The Plan That Suits For You </h1>
        </div>
      </div>
      <div className="row text-white d-flex justify-content-center text-center">
        <div className="col-12 col-md-8 col-lg-8 ">
          <p className="pricing-p">
            We present 3 packages that you can choose to start watching various
            movies you like at low prices and according to your needs
          </p>
        </div>
      </div>
      <div className="container p-0" id="pricing-tables">
        <div className="row pricing-row gy-5">
          <div className="col-md-6 col-lg-4 ">
            <div className="single-table">
              <div className="plan-header text-center">
                <h3 className="fw-bold" >Gold Plan</h3>
                <p>For those of you who like</p>
                <h4 className="plan-price">
                  $9.99<span>/month</span>
                </h4>
              </div>
              <ul className="">
                <li>
                  <span className="list_text">Unlimited Movies</span>
                </li>
                <li>
                  <span className="list_text">No Ads</span>
                </li>
                <li>
                  <span className="list_text">25 Downloading Movies</span>
                </li>
                <li>
                  <span className="list_text">10 TV Channel</span>
                </li>
              </ul>
              <div className="text-center pt-3">
                <a href="#" className="plan-submit">
                  Choose Plan
                </a>
              </div>
              <div className="text-center pt-3">
                {" "}
                <a href="#" className="about_plan">
                  About this plan
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-table ">
              <div className="plan-header text-center">
                <h3 className="fw-bold">Diamond Plan</h3>
                <p>The best plan for all needs</p>
                <h4 className="plan-price">
                  $19.99<span>/years</span>
                </h4>
              </div>
              <ul className="pricing-ul">
                <li className="pricing-li">
                  <span className="list_text">Unlimited Movies</span>
                </li>
                <li className="pricing-li">
                  <span className="list_text">No Ads</span>
                </li>
                <li className="pricing-li">
                  <span className="list_text">100 Downloading Movies</span>
                </li>
                <li className="pricing-li">
                  <span className="list_text">25 TV Channel</span>
                </li>
              </ul>
              <div className="text-center pt-3">
                <a href="#" className="plan-submit">
                  Choose Plan
                </a>
              </div>
              <div className="text-center pt-3">
                {" "}
                <a href="#" className="about_plan">
                  About this plan
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-table " >
              <div className="plan-header text-center">
                <h3 className="fw-bold">Platinum Plan</h3>
                <p>Enjoy the full featured services</p>
                <h4 className="plan-price">
                  $29.99<span>/month</span>
                </h4>
              </div>
              <ul className="">
                <li>
                  <span className="list_text">Unlimited Movies</span>
                </li>
                <li>
                  <span className="list_text">No Ads</span>
                </li>
                <li>
                  <span className="list_text">300 Downloading Movies</span>
                </li>
                <li>
                  <span className="list_text">100 TV Channel</span>
                </li>
              </ul>
              <div className="text-center pt-3">
                <a href="#" className="plan-submit">
                  Choose Plan
                </a>
              </div>
              <div className="text-center pt-3">
                {" "}
                <a href="#" className="about_plan">
                  About this plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
