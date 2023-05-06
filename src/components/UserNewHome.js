import React, {useEffect} from "react";
import NewUserHeader from "./NewUserHeader";
import NewUserCategories from "./NewUserCategories";
import FAQ from "./FAQ";
import NewUserMain from "./NewUserMain";

export default function UserNewHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NewUserCategories />
      <FAQ />
    </div>
  );
}
