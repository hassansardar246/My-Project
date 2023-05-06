import React, {useState, useContext, useEffect} from "react";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { MyContext } from "../Context";
import Loader from "./Loader";
import ErrorAccured from "./ErrorAccured";


export default function CategoryData({genrValue}) {
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
  useEffect(() => {
 
  }, []);
  const {currentgenre, GenereChange,nextpage, genr, setNextPage,setLoader, loader} = useContext(MyContext)
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };
  useEffect(() => {
    setLoader(true)
  }, []);
  const HandlePageClick = (data) => {
    setNextPage(data.selected + 1)
    
  };
  useEffect(() => {
    GenereChange()
    window.scrollTo(0, 0);
  }, [nextpage]);
  console.log(currentgenre)
  const pageNumber= 12
  const totalPages = Math.ceil(currentgenre?.data?.movie_count / pageNumber);
  
  return (
    <>
      <div className="pricing-main ">
        <div className="container-fluid pricing">
          <div className="pricing p-0 m-0">
            <h1
              className="position-absolute top-50 start-50 translate-middle fw-bold"
              st
            >
              {genr} Movies
            </h1>
          </div>
        </div>
      </div>
      <Container>
        <div className="container mt-5">
        <h3 className="text-white mt-5 mb-4 text-center h1">All {genr} Movies</h3>
          <div className="row gy-5 gx-5 movie-row">
            {currentgenre?.data?.movies?.map((movie, index) => (
              <div key={index} className=" col-md-6 coloumns col-lg-4 col-xl-3">
                <div className="card-cont d-flex justify-content-evenly">
                  <Card style={{ width: "16rem", border: "none" }}>
                    <Link
                      
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
        </div>
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
        {loader && <Loader/>}
        {!isOnline&& <ErrorAccured/>}
      </Container>
    </>
  );
}
