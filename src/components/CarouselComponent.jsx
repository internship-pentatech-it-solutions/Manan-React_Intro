import React from "react";
import { Carousel } from "flowbite-react";

export const CarouselComponent = () => {
  const images = [
    {
      src: "../../public/images/carousel_images/slide1.jpg",
      alt: "carousel image",
    },
    {
      src: "../../public/images/carousel_images/slide2.jpg",
      alt: "carousel image",
    },
    {
      src: "../../public/images/carousel_images/slide3.jpg",
      alt: "carousel image",
    },
    {
      src: "../../public/images/carousel_images/slide4.jpg",
      alt: "carousel image",
    },
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 !rounded-2xl p-4 w-full overflow-hidden">
      <Carousel className="h-full">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </Carousel>
    </div>
  );
};
