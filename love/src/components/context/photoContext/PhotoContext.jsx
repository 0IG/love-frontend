import React, { useContext, useEffect, useState, createContext } from "react";

export const PhotoContext = createContext({
  url: () => {},
  user_id: () => {},
});

export default function PhotoProvider({ children }) {
  const [url, setUrl] = useState("");
  const [user_id, setUserId] = useState("");

  useEffect(() => {
    setUrl(
      "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
    );
    setUserId("123");
  }, []);

  return (
    <PhotoContext.Provider value={{ url, user_id }}>
      {children}
    </PhotoContext.Provider>
  );
}
