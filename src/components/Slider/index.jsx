import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageSlider = ({ slides }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={6000}
      showIndicators={false}
      showStatus={false}
      stopOnHover={false}
      width={"99.2vw"}
      animationHandler={"fade"}
    >
      {slides.map((slide) => {
        return <Image src={slide.image} height="680px" width="200px" />;
      })}
    </Carousel>
  );
};

export const ImageSliderMobile = ({ slides }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={8000}
      width="100%"
      dynamicHeight
      centerMode
      centerSlidePercentage={100}
      showStatus={false}
      showIndicators={false}
    >
      {slides.map((slide) => {
        return <Image src={slide.image} height="320px" />;
      })}
    </Carousel>
  );
};
