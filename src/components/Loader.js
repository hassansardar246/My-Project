import ReactDOM from "react-dom";
import "./loader.css";
import { ThreeCircles } from "react-loader-spinner";

const Backdrop = (props) => {
  return (
    <div className="backdrop">
      <div className="loader">
        <ThreeCircles
          height="100"
          width="100"
          color="#DF3A28"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </div>
  );
};

const ModalOverlay = (props) => {
  return <div className="modal">loading</div>;
};
const portalElement = document.getElementById("overlays");

export default function Loader() {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </>
  );
}
