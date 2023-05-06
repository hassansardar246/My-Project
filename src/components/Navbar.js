import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import MoviesListing from "./MoviesListing";
import { MyContext } from "../Context";
import Loader from "./Loader";
const Navbar = (props) => {
  const { setNewQuery, newquery, FetchMovieByName, setFindPage,setLoader, loader } = useContext(MyContext);
  const navigate = useNavigate();
  let location = useLocation();
  const [movi, setMovi] = useState("");
  const [Entered, setEnteredQuery] = useState("");
  // const [isValiduser, setisValiduser] = useState(true);
  const [Sign, setSign] = useState(true);
  const ChangeHandler = (e) => {
    setMovi(e.target.value);
    setEnteredQuery(e.target.value);
  };
  props.isLoginClicked(Sign)
  useEffect(() => {
   
    FetchMovieByName()
    setFindPage('')
    setLoader(true)
  }, [newquery]);

  const HandleState = () => {
    setSign(false)
  }
  const SubmitHandler = (event) => {
    event.preventDefault();
    navigate("/mov-list");
    setNewQuery(movi)



    setEnteredQuery("");
  };

  return (
    <div className="header">
      <nav className="pt-5  navbar navbar-expand-lg bg-transparent navbar-dark">
        <div className="container-fluid nav-container p-0">
          <Link className="navbar-brand" to={"/"}>
            M
            <i
              className="fa-regular fa-circle-play"
              style={{ color: "#ff0000" }}
            ></i>
            Vstrem
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-center "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 me-lg-5">
              <li className="nav-item">
                <NavLink
                  className={`text-white nav-link ${location.pathname === "/" ? "active" : ""
                    }`}
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`text-white nav-link ${location.pathname === "/movies" ? "active," : ""
                    }`}
                  to={"/movies"}
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`text-white nav-link ${location.pathname === "/categories" ? "active" : ""
                    }`}
                  to={"/categories"}
                >
                  Categories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`text-white nav-link ${location.pathname === "/pricing" ? "active" : ""
                    }`}
                  to={"/pricing"}
                >
                  Pricing
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={` text-white nav-link ${location.pathname === "/about" ? "active" : ""
                    }`}
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
            </ul>
            <form onSubmit={SubmitHandler} class="d-flex" role="search">
              <input
                value={Entered}
                onChange={ChangeHandler}
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className=" navbar-icon  mt-2 mb-lg-0"
            >
              {/* <h5 className="nav-item">
                <Link className="nav-link icons" to={"/"}>
                  <box-icon name="bell" color="white"></box-icon>
                </Link>
              </h5> */}
              {props.value ? <h5 className="nav-item" >
                <Link className="nav-link icons" to={"/"}>
                  <box-icon name="user" color="white"></box-icon>
                </Link>
              </h5> :
                <button className="UserLog">
                  <Link className="new-user" onClick={HandleState} to={"/login"}>Log In
                  </Link>
                </button>
              }


            </div>
          </div>
        </div>
      </nav>
      {loader && <Loader />}
    </div>
  );
};

export default Navbar;
