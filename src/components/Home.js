import React, { useContext, useState, useEffect } from "react";

import Header from "./Header";
import Categories from "./Categories";
import Movies from "./Movies";
import Pricing from "./Pricing";
import About from "./About";
import Featuers from "./Featuers";
import { MyContext } from "../Context";
import Loader from "./Loader";
import ErrorAccured from "./ErrorAccured";
const Home = (props) => {
  const{GenereChange, MoviesData, newquery,error,setLoader, loader} = useContext(MyContext)
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    setLoader(true)
    props.loadedHome()

  }, []);
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
    props.loadedHome()
  }, []);
  const handleOnline = () => {
    setIsOnline(true);
    window.location.reload();
  };

  const handleOffline = () => {
    setIsOnline(false);
  };
  
  useEffect(() => {
    MoviesData()
    // GenereChange()
  }, []);
  return (
    <div>
      <Header />
      {/* <Categories catgoryHandler={HandleCat} /> */}
      <Movies />
      <Pricing />
      <Featuers />
      <About />
      {loader && <Loader/>}
      {!isOnline&& <ErrorAccured/>}
    </div>
  );
};

export default Home;
