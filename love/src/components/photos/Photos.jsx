import React from "react";
import Photo from "../photo/Photo";

export default function Photos() {
  const API = import.meta.env.VITE_LOCAL_API;
  return (
    <div className="photos">
      <Photo />
    </div>
  );
}
