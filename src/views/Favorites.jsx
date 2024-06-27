import { useContext } from "react";
import { ContentContext } from "../context/ContentProvider";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { photos, setPhotos } = useContext(ContentContext);

  const favPhotos = photos.filter((photo) => photo.liked);

  const liked = (index) => {
    const newPhotos = [...photos];
    newPhotos[index].liked = !newPhotos[index].liked;
    setPhotos(newPhotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-5 p-3">
        {favPhotos.map((photos, index) => (
          <div
            className="photo"
            style={{ backgroundImage: `url(${photos.src.tiny})` }}
            key={index}
          >
            <IconHeart filled={photos.liked} onClick={() => liked(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
