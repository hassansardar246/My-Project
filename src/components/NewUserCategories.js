import React from "react";
import tv from "../images/tv.svg";
import popcorn from "../images/popcorn.svg";
import download from "../images/download.svg";
import crystal from "../images/crystalball.svg";
import "./newusercategory.css";

export default function NewUserCategories() {
  return (
    <div className="container move-card-up">
      <div className="row justify-content-between row-cols-lg-4">
        <div className="col card-rows">
          <div className="img-div-cat">
            <img style={{ width: "100%" }} src={tv} alt="" />
          </div>
          <h3>Enjoy on your TV.</h3>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="col card-rows">
          <div className="img-div-cat">
            <img style={{ width: "100%" }} src={popcorn} alt="" />
          </div>
          <h3>Watch everywhere.</h3>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="col card-rows">
          <div className="img-div-cat">
            <img style={{ width: "100%" }} src={download} alt="" />
          </div>
          <h3>Create profiles for kids.</h3>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div className="col card-rows">
          <div className="img-div-cat">
            <img style={{ width: "100%" }} src={crystal} alt="" />
          </div>
          <h3>Download your shows to watch offline.</h3>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
}
