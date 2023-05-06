import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import MoviesDummy from "./MoviesDummy";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";

import ReactPaginate from "react-paginate";
import Loader from "./Loader";
import ErrorAccured from "./ErrorAccured";
import defalt from "../images/default_poster.jpg";

const MoviesPage = () => {
  const { currentmovie, MoviesData, newpage, setNewpage, setLoader, loader, error } =
  useContext(MyContext);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [imageUrl, setImageUrl] = useState("");
  // const[loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
   
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
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
    setNewpage(data.selected + 1);
  };
  useEffect(() => {
    MoviesData();
  }, [newpage]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newpage]);
  //
  console.log( 'All Movies------>', currentmovie)
  const pageNumber= 12
  
  const totalPages = Math.ceil(currentmovie?.movie_count / pageNumber);

  return (
    <>
      <div className="pricing-main">
        <div className="container-fluid pricing">
          <div className="pricing p-0 m-0">
            <h1
              className="position-absolute top-50 start-50 translate-middle fw-bold"
              st
            >
              Movies
            </h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="row text-white ">
          <div className="col-md-8 movies-col">
            <h1 className="movies-h1">
              {" "}
              The Most Popular Movies To Watch In 2023{" "}
            </h1>
          </div>
        </div>
        <div className="align-items-center my-5">
          <button className="btn_movie active">All</button>

          <button className="btn_movie ">Rating</button>

          <button className="btn_movie">Vote</button>

          <Link to="/categories" className="btn_movie me-5">
            Genre
          </Link>
        </div>

        <div className="row gy-5 gx-5 movie-row">
          {currentmovie?.movies?.map((movie, index) => (
            <div key={index} className=" col-md-6 coloumns col-lg-4 col-xl-3">
              <div className="card-cont d-flex justify-content-evenly">
                <Card style={{ width: "16rem", border: "none" }}>
                  <Link
                    // key={movie.id}
                    // onClick={() => handleMovieClick(movie.id)}
                    to={`/movies/${movie.id}`}
                  >
                    
                    
                      <Card.Img
                        className="Movies_card "
                        variant="top"
                        src={movie.medium_cover_image}
                        
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
        {loader && <Loader />}
        {!isOnline && <ErrorAccured />}
      </Container>
      {/* {selectedMovieId && <MovieDetailPage movieId={selectedMovieId} />} */}
      {/* <div className="container d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination mx-auto">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
      {currentmovie?.movies && (
        <div className="d-flex mt-5 justify-content-center">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
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
      )}
    </>
  );
};

export default MoviesPage;
