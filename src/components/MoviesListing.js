import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { MyContext } from "../Context";
import { Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "./moviedetail.css";
import ErrorAccured from "./ErrorAccured";
import nodata from '../images/No data-amico.svg'


export default function MoviesListing() {
  const {enteredmovie , MoviesData,FetchMovieByName,newquery, setNewQuery, findpage, setFindPage}= useContext(MyContext);
  const pageNumber= 12
  
  const totalPages = Math.ceil(enteredmovie?.movie_count / pageNumber);
 
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  const handleOnline = () => {
    setIsOnline(true);
    window.location.reload();
  };

  const handleOffline = () => {
    setIsOnline(false);
  };
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [current, setCurrent] = useState();
  const handleMovieClick = (movieId) => {
    
    setSelectedMovieId(movieId);
  };
  const HandlePageClick = (data) => {
    setFindPage(data.selected +1);
  };
  // CurrentData(current);
  
  useEffect(() => {
    FetchMovieByName()
  }, [findpage]);
  // console.log(enteredmovie)
  return (
    <>
      <div className="pricing-main">
        <div className="container-fluid pricing">
          <div className="pricing p-0 m-0">
            <h1
              className="position-absolute top-50 start-50 translate-middle fw-bold"
              st
            >
              Search Movies
            </h1>
          </div>
        </div>
      </div>
      <Container>
        {enteredmovie?.movie_count ?
        <div className="container mt-5">
          <h3 className="text-white mt-5 mb-4 text-center h1">All Listed Movies</h3>
        <div className="row gy-5 gx-5 movie-row">
          {enteredmovie?.movies?.map((movie, index) => (
            
            <div key={index} className=" col-md-6 coloumns col-lg-4 col-xl-3">
              <div className="card-cont d-flex justify-content-evenly">
                <Card style={{ width: "16rem", border: "none" }}>
                  <Link
                    // key={movie.id}
                    // onClick={() => handleMovieClick(movie.id)}
                    to={`/movies/${movie.id}`}
                  >
                    <Card.Img
                      className="Movies_card"
                      style={{ height: "24rem" }}
                      variant="top"
                      src={movie.large_cover_image}
                    />
                  </Link>
                  <Card.Body
                    className="px-0"
                    style={{ backgroundColor: "#22262F" }}
                  >
                    <Card.Title className="text-white">
                      {movie.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#A0A2A6" }}>
                      {movie.description_full.slice(0, 50)}...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>: <div className="text-white text-center m-auto w-50 ">
<img className="w-100" src={nodata} alt="" />
      </div>
      }
        
        {enteredmovie?.movie_count&& enteredmovie?.movie_count
 > 12 && 
         <div className="d-flex mt-5 justify-content-center">
         <ReactPaginate
           previousLabel={"Prev"}
           nextLabel={"Next"}
           breakLabel={"..."}
           pageCount={totalPages}
           marginPagesDisplayed={2}
           pageRangeDisplayed={3}
           onPageChange={HandlePageClick}
           containerClassName={"pagination pagination-lg"}
           pageClassName={"page-item"}
           pageLinkClassName={"page-link"}
           previousClassName={"page-item"}
           previousLinkClassName={"page-link"}
           nextClassName={"page-item"}
           nextLinkClassName={"page-link"}
           activeClassName="active"
         />
       </div>
        }
       
        {!isOnline&& <ErrorAccured/>}
      </Container>
    </>
  );
}
