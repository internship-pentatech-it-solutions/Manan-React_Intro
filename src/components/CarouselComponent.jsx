import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const CarouselComponent = () => {
  const images = [
    {
      src: "/images/carousel_images/slide1.jpg",
      alt: "carousel image",
    },
    {
      src: "/images/carousel_images/slide2.jpg",
      alt: "carousel image",
    },
    {
      src: "/images/carousel_images/slide3.jpg",
      alt: "carousel image",
    },
    {
      src: "/images/carousel_images/slide4.jpg",
      alt: "carousel image",
    },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-full rounded-2xl mb-8 md:mb-12 h-full"
    >
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={_.src}
                alt="Carousel Image"
                className="object-fill md:object-cover rounded-2xl w-full h-24 md:h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
