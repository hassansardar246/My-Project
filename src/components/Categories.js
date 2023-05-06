import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import DummyArray from "./DummyArray";
import { MyContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ErrorAccured from "./ErrorAccured";

const Categories = () => {
 
  const{loader,setGenr,error, genr, GenereChange }= useContext(MyContext)
  const navigate = useNavigate();
  
  useEffect(() => {
    GenereChange()
  }, [genr]);
  // console.log(currentgenre)
  return (
    <div className="main_container">
      <Container>
        <div className="row justify-content-between text-white align-items-center  ">
          <div className="col-md-6">
            <h1 className="categories-h1">
              {" "}
              Choose The Type Of Film You Liked{" "}
            </h1>
          </div>
          <div className="col-md-6">
            <p className="categories-p">
              We present many films from various main categories, let's choose
              and search film of you liked
            </p>
          </div>
        </div>
        <div className="row ">
          {DummyArray.slice(0, 8).map((item, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 py-3">
              <div className="card py-4">
                <div
                  onClick={(e) => {
                    navigate('/Cat-Listing')
                    setGenr(item.category);
                  }}
                  key={index}
                  className="card-body d-flex"
                  style={{ cursor: "pointer" }}
                >
                  <div className="ps-2 pe-4 category_icon">
                    <i className={item.icon} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h5 className="card-title">{item.category}</h5>
                    <p className="card-text">{item.total_movies}+ Movies</p>
                    <a className="view-more">View More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loader && <Loader/>}
        {error&& <ErrorAccured/>}
      </Container>
    </div>
  );
};

export default Categories;
