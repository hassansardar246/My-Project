import React from "react";
import "./newusermain.css";
export default function NewUserMain() {
  return (
    <div className="container px-5 ">
      <div className="row">
        <div className="col col-12 col-lg-10 new-user-main">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="get-started-btn">
            <form action="#">
              <input type="email" placeholder="Email Address" />
              <button type="submit">Get Started</button>
            </form>
            
          </div>
         
        </div>
      </div>
    </div>
  );
}
