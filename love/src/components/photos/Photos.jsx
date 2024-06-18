import React, { useEffect, useState } from "react";
import Photo from "../photo/Photo";
import axios from "axios";

import "./Photos.scss";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const API = import.meta.env.VITE_LOCAL_API;

  useEffect(() => {
    axios
      .get(`${API}/photos`)
      .then((response) => {
        setPhotos(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="photos">
      <div className="photos__container">
        {photos.map((photo, index) => {
          return <Photo key={index} picture={photo} index={index} />;
        })}
      </div>
    </div>
  );
}
