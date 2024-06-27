import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext();

const ContentProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  async function getPhotos() {
    const url = "/photos.json";
    const response = await fetch(url);
    const data = await response.json();

    await setPhotos(data.photos);
    console.log(data.photos);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <ContentContext.Provider value={{ photos, setPhotos }}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
