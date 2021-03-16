import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <div className="CarouselComponent">
      <Carousel
        interval={2000}
        keyboard={false}
        pauseOnHover={true}
        className="carousel"
        indicators={false}
      >
        <Carousel.Item className="Carousel-Item">
          <img
            className="d-block w-100 caroursel-img"
            src="https://static.giantbomb.com/uploads/original/1/17245/1139525-ep2_outland_010004.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caroursel-img"
            src="https://static.giantbomb.com/uploads/original/1/17245/1139522-ep2_outland_010001.jpg"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caroursel-img"
            src="https://cdn.wallpapersafari.com/13/59/bc4M8A.jpg"
            alt="Third slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
