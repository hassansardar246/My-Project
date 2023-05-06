import React from "react";
import { Link } from "react-router-dom";
import "./newuserheader.css";
import NewUserMain from "./NewUserMain";
export default function NewUserHeader() {
  return (
    <div className="Main-bg-new-user">
      <div className="container p-4">
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="logo">
            
          </div>
      
        </div>
      </div>
      <NewUserMain />
    </div>
  );
}
