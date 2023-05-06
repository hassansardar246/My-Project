import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import Cat from "./components/Cat";
import PricingPage from "./components/PricingPage";
import MoviesPage from "./components/MoviesPage";
import MovieDetailPage from "./components/MovieDetailPage";
import CategoriesPage from "./components/CategoriesPage";
import UserNewHome from "./components/UserNewHome";
import MoviesListing from "./components/MoviesListing";
import CategoryData from "./components/CategoryData";
import MoviesProvider from "./Context";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import FormValidate from "./components/FormValidate";
function App() {
  const[isSignup, setIsSignUp] = useState(true)
  const[Registered, setRegistered] = useState()

  const IsClicked=(click)=>{
    setIsSignUp(click)
  }
  const IsHomeLoaded=()=>{
    setIsSignUp(true)
  }
  const IsLoginCheked=(val)=>{
    setRegistered(val)
  }
  

  return (
    <MoviesProvider>
     {isSignup && <Navbar isLoginClicked={IsClicked} value={Registered} />}
     {/* <FormValidate/> */}
      
      <Routes>
        <Route exact path="/" element={<Home loadedHome={IsHomeLoaded} />}></Route>
        <Route exact path="/login" element={<LogIn LoginChecked={IsLoginCheked}/>}></Route>
        <Route exact path="/categories" element={<CategoriesPage />}></Route>
        <Route exact path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route exact path="/pricing" element={<PricingPage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/cat" element={<Cat act={"Action"} />}></Route>
        <Route exact path="/mov-list" element={<MoviesListing />}></Route>
        <Route exact path="/Cat-Listing" element={<CategoryData />}></Route>
        <Route exact path="/SingUp" element={<SignUp/>}></Route>
      </Routes>

      {isSignup &&      <Footer />}
    </MoviesProvider>
  );
}
export default App;

