import React from "react";
import "./preLoader.css";
import Logo from "./logoLoading.png";

const Preloader = ({ name }) => {
  return (
    <div className="preloader">
      <div className="loader">
        <h1 className="name">
          <div>
            <img src={Logo} alt="Mohanraj Murugasen" />
          </div>
          &nbsp;&nbsp;{name}
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
