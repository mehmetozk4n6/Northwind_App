import ImageGallery from "react-image-gallery";
import discount from "../../assets/discount.jpeg";

const images = [
  {
    original: discount,
    thumbnail: discount,
    originalWidth: "1000",
    originalHeight: "500",
  },
  {
    original: discount,
    thumbnail: discount,
    originalWidth: "1000",
    originalHeight: "500",
  },
  {
    original: discount,
    thumbnail: discount,
    originalWidth: "1000",
    originalHeight: "500",
  },
];

function Carousel() {
  return (
    <div className="carousel mx-auto p-1 mt-1 border rounded">
      <ImageGallery
        items={images}
        loading="lazy"
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
}

export default Carousel;
