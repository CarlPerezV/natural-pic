import { useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(ContentContext);

  const liked = (index) => {
    const newPhotos = [...photos];
    newPhotos[index].liked = !newPhotos[index].liked;
    setPhotos(newPhotos);
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photos, index) => (
        <div
          className="photo"
          style={{ backgroundImage: `url(${photos.src.tiny})` }}
          key={index}
        >
          <IconHeart filled={photos.liked} onClick={() => liked(index)} />
        </div>
      ))}
    </div>
  );
};
export default Gallery;
