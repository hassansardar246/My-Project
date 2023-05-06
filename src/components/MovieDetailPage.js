import React, { useState, useContext, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import MoviesDummy from "./MoviesDummy";
import MyContext from "../Context";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "./moviedetail.css";

const MovieDetailPage = () => {
  const currentmovie = useContext(MyContext);
  const [lgShow, setLgShow] = useState(false);
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [suggest, setSuggestion] = useState([]);
  const [loader, setLoader] = useState(false);
  const [box, setShowBox] = useState(false);
  const MovieDeatail = async () => {
    setLoader(true);
    await axios
      .get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
      )
      .then((response) => {
        setMovie(response.data.data);
      })
      .catch((error) => console.log(error));
    await axios
      .get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
      .then((response) => {
        setSuggestion(response.data);
        setLoader(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    window.scroll(0, 0);
    const timeout = setTimeout(() => {
      MovieDeatail();
    }, 0);
    return () => clearTimeout(timeout);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const handleDownload = () => {
    const url = `movie?.movie?.torrents[0].url`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute = "download";
    document.body.appendChild(link);
    link.click();
  };

  const ShowBox = () => {
    setShowBox(!box);
  };

  return (
    <div className="text-light detail-page container">
      <div className="row my-5 gy-5">
        <div className="col-md-6 col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={movie?.movie?.medium_cover_image}
              style={{ height: "24rem" }}
            />
          </Card>
        </div>
        <div className="col-md-4 col-lg-6">
          <h1>{movie?.movie?.title}</h1>
          <p className="d-flex align-items-center">
            {movie?.movie?.year}
            <i
              className="fa-solid fa-star ps-5 pe-2 "
              style={{ fontSize: "10px" }}
            ></i>{" "}
            {movie?.movie?.rating}
          </p>
          <p className="pt-4 w-75">
            {movie?.movie?.description_full.slice(0, 400)}...
          </p>

          <p>
            Cast:{" "}
            {movie?.movie?.cast?.map((val) => {
              return <span className="ps-2">{val.name},</span>;
            })}
          </p>
          <p>{/* Genre: <span className="ps-2">{movie.genres[0]}</span> */}</p>
          <div className="mt-2">
            <button
              type="button"
              className="btn btn_detail my-2 me-2"
              onClick={() => setLgShow(true)}
            >
              Watch movie
            </button>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {movie.title} Trailer
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <video width="100%" controls>
                  <source
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4.mp4"
                    type="video/mp4"
                  />
                </video>{" "}
              </Modal.Body>
            </Modal>
            <span className="position-relative">
              <button
                onClick={ShowBox}
                type="button"
                className="btn btn_detail my-2 me-2"
              >
                Download Now
              </button>
              {box && (
                <div className=" video-quality">
                  {movie?.movie?.torrents?.map((val, index) => {
                    return (
                      <div className="urls">
                        <a onClick={() => setShowBox(false)} href={val.url}>
                          {" "}
                          {val.quality}
                        </a>
                        {console.log(val.url)}
                      </div>
                    );
                  })}
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
      <div>
        <h1>Top cast</h1>
        <div className="row  my-3 gy-5">
          {movie?.movie?.cast?.map((cast) => (
            <div className="col-md-6 col-lg-3 col-xl-3 " key={cast.imdb_code}>
              <div className="d-flex align-items-center">
                <img
                  className="cast_img"
                  src={cast.url_small_image}
                  alt={cast.name}
                />
                <div className="card-body ps-5">
                  <h5 className="card-title">{cast.name}</h5>
                  <p className="card-text">{cast.character_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row my-5 gx-5 gy-5 ">
        <h1 className="my-3">More like this</h1>
        {suggest?.data?.movies.map((val) => {
          return (
            <div className="col-md-6 col-lg-4 col-xl-3 my-3">
              <div className="d-flex justify-content-evenly">
                <Card
                  style={{
                    width: "18rem",
                    cursor: "pointer",
                    borderRadius: "0px",
                  }}
                >
                  <Link to={`/movies/${val.id}`}>
                    <Card.Img
                      variant="top"
                      src={val.medium_cover_image}
                      style={{ height: "24rem" }}
                    />
                  </Link>
                  <Card.Body>
                    <h5 className="card-title">{val.title.slice(0, 20)}...</h5>
                    <p className="card-text">
                      {val.description_full.slice(0, 50)}...
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default MovieDetailPage;
