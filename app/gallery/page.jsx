import Image from "next/image";
import image1 from "../Assets/pujaevent.jpg";
import image2 from "../Assets/pujaevent.jpg";
import image3 from "../Assets/pujaevent.jpg";
import image4 from "../Assets/pujaevent.jpg";

const FullGallery = () => {
  const images = [
    { src: image1, alt: "pizza-one", width: 1000, height: 805 },
    { src: image2, alt: "pizza-two", width: 700, height: 405 },
    { src: image3, alt: "pizza-three", width: 500, height: 405 },
    { src: image4, alt: "pizza-four", width: 500, height: 405 },
    // Add more images as needed
  ];

  return (
    <div className="gallery-page">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
            Full Gallery
          </h2>
          <h3 className="text-3xl lg:text-5xl font-semibold text-black">
            All Event Images
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 px-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-3xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="inner-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
