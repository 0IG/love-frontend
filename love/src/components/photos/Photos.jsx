import React, { useEffect, useState } from "react";
import Photo from "../photo/Photo";
import axios from "axios";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  const API = import.meta.env.VITE_LOCAL_API;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setPhotos(response.data.payload);
      })
      .catch((error) => {
        console.message(error);
      });
  }),
    [];

  return (
    <div className="photos">
      <div className="photos__container">
        <Photo />
      </div>
    </div>
  );
}
