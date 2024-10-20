import React from "react";
import "./main.css";
import "../../../src/assets/banner.png"

const Main: React.FC = () => {



  return (
    <>
      <div className="main__banner">
        <img src="../../../src/assets/banner.png" alt="" className="main__banner__img" />
      </div>

      <div className="container">
        <div className="main__content__list">
          <div className="main__content__card">
            
          </div>
        </div>

        <div className="main__content__news">

        </div>
      </div>
    </>
  );
};

export default Main;
