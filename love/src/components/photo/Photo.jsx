import React from "react";
import "./Photo.scss";
export default function Photo({ picture, index }) {
  const API = import.meta.env.VITE_LOCAL_API;

  const handleImage = (index) => {
    return `${API}/photos/${index}`;
  };

  const placeholder =
    "https://t3.ftcdn.net/jpg/04/39/83/12/360_F_439831247_8hD04tJakItDaMKaKUFfsjhN18hMt2os.jpg";
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
