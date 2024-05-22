import React from "react";
import "./Photos.scss";

export default function Photos() {
  const photos = ["image1", "image2", "image3"];
  return (
    <div className="photos">
      <div className="photos__container">
        <div className="photos__photo">
          <img
            src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
            alt="photo"
            className="photos__image"
          />
        </div>
        <div className="photos__photo">
          <img
            src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
            alt="photo"
            className="photos__image"
          />
        </div>
        <div className="photos__photo">
          <img
            src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
            alt="photo"
            className="photos__image"
          />
        </div>
        <div className="photos__photo">
          <img
            src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
            alt="photo"
            className="photos__image"
          />
        </div>
        <div className="photos__photo">
          <img
            src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
            alt="photo"
            className="photos__image"
          />
        </div>
        <div className="photos__photo">
          <img
            src="https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
            alt="photo"
            className="photos__image"
          />
        </div>
      </div>
    </div>
  );
}
