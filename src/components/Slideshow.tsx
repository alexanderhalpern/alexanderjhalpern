import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Slideshow = ({
  className,
  images,
  name,
  borderColor,
}: {
  className?: string;
  images: string[];
  name: string;
  borderColor: string;
}) => {
  return (
    <Carousel
      data-bs-theme="dark"
      controls={false}
      className="shadow rounded border-5"
      style={{ borderColor }}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={`/images/${name}-slideshow/${image}`}
            alt={`${name} slide ${index + 1}`}
            className="d-block w-100"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slideshow;
