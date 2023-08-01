import React from "react";
import { Link } from "react-router-dom";
import "./HeaderA.css";
import arrow from "../../../public/left-arrow.svg";

const HeaderA = (props) => {
  const { tituloPrincipal, redirectUrl } = props;

  return (
    <>
      <div className="cabezal-container">
        <div id="backbtn" className="back-container">
          <Link to={redirectUrl}>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="titulo-container">
          <h3>{tituloPrincipal}</h3>
        </div>
      </div>
    </>
  );
};

export default HeaderA;
