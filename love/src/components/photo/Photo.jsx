import React from "react";
import "./Photo.scss";
export default function Photo({ picture, index }) {
  return (
    <div className="photo">
      <div className="photo__container">
        <div className="photo__imageContainer">
          <img className="photo__img" src={picture.url}></img>
        </div>
        <div className="photo__descContainer">
          <div className="photo__description"></div>
        </div>
      </div>
    </div>
  );
}
