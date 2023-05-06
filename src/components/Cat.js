import React, { useState } from "react";
import { Container } from "react-bootstrap";
// import DummyArray from "./DummyArray";

const Cat = (props) => {
  const [cate, setCate] = useState([]);

  const getData = async () => {

    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?limit=10"
    );
    const data = await response.json();
    let categ = await data.data.movies
    console.log(categ)
    setCate(categ);
  };

  getData();
  return (
    <div>
      <div className="main_container">
        <div className="container_shape">
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
                  We present many films from various main categories, let's
                  choose and search film of you liked
                </p>
              </div>
            </div>
            <div className="row ">
              {cate.map((item) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 py-3">
                  <div className="card py-4">
                    <div className="card-body d-flex">
                      {/* <div className="ps-2 pe-4 category_icon">
                    <i className={item.icon} aria-hidden="true"></i>
                  </div> */}

                      <div>
                        {/* <h5 className="card-title">{item.title}</h5> */}
                        <h5 className="card-title">{item.genres}</h5>
                        <video width="400" controls autoPlay muted>
                            <source src={item.yt_trailer_code==''?'Have Not': item.yt_trailer_code} type='video/mp4'/>
                            <source src='https://youtu.be/IuJEXKt5u1Q' type='video/mp4'/>
                           
 
                                  </video>
                        {/* <p className="card-text">{item.summary}</p> */}
                        {/* <a href="#" className="">
                      {item.view_more}
                    </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Cat;
