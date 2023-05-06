import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../Context";

const Header = () => {
  const currentmovie = useContext(MyContext);
  console.log(currentmovie);

  return (
    <div
      className="intro"
      // style={{
      //   backgroundImage: `url(${currentmovie?.movies[0]?.background_image_original})`,
      // }}
    >
      <div className="container header-component  pb-5">
        <div className="pricing p-0 m-0">
          <div className="row m-0">
            <div className="col-md-8 ">
              <div className="d-flex">
                <h2 className="">Welcome</h2>
                <hr className="hr" />
              </div>

              <h1 className=" mt-2 header-h1">Let's Make your Own Cinema</h1>
              <p className="header-paragraph mt-3">
                You Can still enjoy the latest movies and other movies online
                and at a lower price
              </p>
              <div>
                <button className=" header-button1"><Link className="text-white text-decoration-none" to={'/pricing'}>Show Plan</Link></button>
                <button className="header-button2"><Link className="text-white text-decoration-none" to={'/SingUp/Login'}>Get Started</Link></button>
              </div>
            </div>
            {/* <div className="col-md-4 text-center mt-auto mb-5">
              <i className="play-icon fas fa-duotone fa-play"></i>
              <br></br>
              <Link className="header-link" to={"/"}>
                {" "}
                Watching Now
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
