import React, { useContext, useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card } from "react-bootstrap";
import { MyContext } from "../Context";
import { Link } from "react-router-dom";
import defalt from '../images/default_poster.jpg'

const MoviesCarouse = ({value}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [rting, setRatingActive] = useState(false);
  function handleTabClick(index) {
    setActiveTab(index);
    
    }


  
  const values = {
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };
  
  const { MoviesData, currentmovie } = useContext(MyContext);
  
  useEffect(() => {
    MoviesData();
  }, []);

//  console.log("value---->",value)

  return (
    
    <div className="container">
      <div className="align-items-center my-5">
        <button className={activeTab === 0 ? 'btn_movie active' : 'btn_movie '} onClick={() => handleTabClick(0)}>All</button>
        <a className={activeTab === 1 ? 'btn_movie active' : 'btn_movie'} onClick={() => handleTabClick(1) }>Rating</a>
        <button className={activeTab === 2 ? 'btn_movie active' : 'btn_movie'} onClick={() => handleTabClick(2)}>Genre</button>

        {/* <button className="btn_movie ">Rating</button> */}

        {/* <button className="btn_movie">Vote</button> */}
{/* 
        <Link to="/categories" className="btn_movie me-5">Genre</Link> */}
        
        {/* <MemoizedGrandchildComponent /> */}
      </div>
      
      <OwlCarousel loop autoplay {...values}>
      
      {currentmovie?.movies?.map((movie, index) => (
        <div key={index} className="item">
           
          <Card className="MoviesCard" style={{ border: "none" }}>
            <Link to={`/movies/${movie.id}`}>
              {movie.large_cover_image?
              <Card.Img
              className="Movies_card "
              variant="top"
              src={movie.large_cover_image} 
            />:
            <>
            <Card.Img
              className="Movies_card "
              variant="top"
              src={defalt}
              
              
            />
            </>
              
            }
           
           
              
            </Link>
            <Card.Body
              className="px-0"
              style={{ backgroundColor: "#22262F" }}
            >
                
              <Card.Title className="text-white">{movie.title}</Card.Title>
              <Card.Text style={{ color: "#A0A2A6" }}>
  {movie.description_full.slice(0, 50)}...
  
</Card.Text>
{rting=== 1 && <Card.Text style={{ color: "#A0A2A6" }}>
  {movie.rating}
</Card.Text>}
            </Card.Body>
          </Card>
          {/* {value &&  } */}
        </div>
        
      ))}

    </OwlCarousel>

    
    </div>
  );
};

export default MoviesCarouse;
