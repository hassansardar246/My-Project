import React, { useContext, useEffect, useState } from "react";
import Categories from "./Categories";
import { MyContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ErrorAccured from "./ErrorAccured";

const CategoriesPage = () => {
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
    window.scrollTo(0, 0);
  }, []);
  const {loader} = useContext(MyContext)
  const navigate = useNavigate();
  const [genr, setGenr] = useState();
  const HandleCat = (event) => {
    setGenr(event);
  };
  return (
    <div>
      <div
        className="category-main"
      >
        <div className="container-fluid pricing">
          <div className="pricing p-0 m-0">
            <h1 className="position-absolute top-50 start-50 translate-middle fw-bold">
              Categories
            </h1>
          </div>
        </div>
      </div>
      <Categories  />
      {/* {loader && <Loader/>} */}
      {!isOnline&& <ErrorAccured/>}
    </div>
  );
};

export default CategoriesPage;
