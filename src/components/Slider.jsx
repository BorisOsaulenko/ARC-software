import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Slider = ({ slides }) => {
  return (
    <Carousel>
      {slides.map((slide) => {
        return (
          <Carousel.Item key={slide.image}>
            <img src={slide.image} alt="" className="h-full rounded-md" />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
