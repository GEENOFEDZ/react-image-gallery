import ImageCard from "./ImageCard";

function ImageGallery({ images }) {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard
          key={img.id}
          image={img}
        />
      ))}
    </div>
  );
}

export default ImageGallery;