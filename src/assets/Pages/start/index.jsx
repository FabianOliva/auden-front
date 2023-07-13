import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { logo } from "../../../../public/logo-large.png";

const Start = () => {
  return (
    <>
      <section className="start-logo-sect">
        <div className="start-logo-sect">
          <img src={logo} alt="logo" className="start-logo-img" />
          <h1 className="start-logo-h1">Música a medida</h1>
        </div>
      </section>

      <section>
        <div></div>
      </section>
    </>
  );
};

export default Start;
