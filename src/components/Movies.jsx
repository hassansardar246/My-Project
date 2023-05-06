import React, { memo, useState } from "react";
import { Container } from "react-bootstrap";
import MoviesCarouse from "./MoviesCarouse";
const Movies = () => {

  
  // if(activeTab==0){
  //   navigate('/about')
  //  }
 
  //  if(activeTab==2){
  //   navigate('/categories')
  //  }
  return (
    <Container>
      <div className="row text-white ">
        <div className="col-md-8 movies-col">
          <h1 className="movies-h1">
            {" "}
            The Most Popular Movies To Watch In 2021{" "}
          </h1>
        </div>
      </div>
      {/* <div className="align-items-center my-5"> */}
        {/* <button className={activeTab === 0 ? 'btn_movie active' : 'btn_movie '} onClick={() => handleTabClick(0)}>All</button>
        <button className={activeTab === 1 ? 'btn_movie active' : 'btn_movie'} onClick={() => handleTabClick(1)}>Rating</button>
        <button className={activeTab === 2 ? 'btn_movie active' : 'btn_movie'} onClick={() => handleTabClick(2)}>Genre</button> */}

        {/* <button className="btn_movie ">Rating</button> */}

        {/* <button className="btn_movie">Vote</button> */}
{/* 
        <Link to="/categories" className="btn_movie me-5">Genre</Link> */}
        
        {/* <MemoizedGrandchildComponent /> */}
      {/* </div> */}
      <MoviesCarouse />
    </Container>
  );
};

export default Movies;
