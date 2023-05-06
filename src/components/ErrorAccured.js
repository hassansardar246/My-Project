import ReactDOM from "react-dom";
import "./loader.css";

import error from '../images/nointernet.jpg'

const Backdrop = (props) => {
  return (
    <div className="backdrop">
      <div className="error-img">
      <img  src={error} alt="Girl in a jacket"/>
      </div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return <div className="modal">loading
  
  </div>;
};
const portalElement = document.getElementById("overlays");

export default function ErrorAccured() {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </>
  );
}