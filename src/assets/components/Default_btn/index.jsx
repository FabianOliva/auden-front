import React from "react";
import "./index.css";

export const Default_btn_Active = (props) => {
  return (
    <a href="" className="Default_btn actived">
      {props.text}
    </a>
  );
};

export const Default_btn_login = (props) => {
  return (
    <a href="" className="Default_btn login">
      <img src={props.img} alt="" className="login-img" />
      {props.text}
    </a>
  );
};

export const Default_btn_Inactive = (props) => {
  return (
    <a href="" className="Default_btn inactive">
      {props.text}
    </a>
  );
};
