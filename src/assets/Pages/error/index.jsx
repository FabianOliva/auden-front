import "./index.css";
import Nav_Bar from "../../components/Nav_bar";
import ErrorGif from "../../../public/wired-flat-1140-error.gif";

const ErrorPage = () => {
  return (
    <>
      <div className="ErrorPage_main">
        <p className="ErrorPage_main_title">Oops...</p>
        <p className="ErrorPage_main_subtitle">We couldn't find that page</p>
        <img className="ErrorPage_main_gif" src={ErrorGif} alt="" />
      </div>
      <Nav_Bar />
    </>
  );
};

export default ErrorPage;
