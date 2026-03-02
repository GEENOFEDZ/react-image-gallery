import ImageGallery from "./components/ImageGallery";
import "./styles.css";

function App() {
  const images = [
    {
      id: 1,
      url: "https://picsum.photos/id/1015/600/400",
      title: "Mountain",
      description: "Beautiful mountain view"
    },
    {
      id: 2,
      url: "https://picsum.photos/id/1016/600/400",
      title: "Forest",
      description: "Green forest landscape"
    },
    {
      id: 3,
      url: "https://picsum.photos/id/1018/600/400",
      title: "River",
      description: "Peaceful river flowing"
    }
  ];

  return (
    <div>
      <h1 className="title">Dynamic Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
}

export default App;