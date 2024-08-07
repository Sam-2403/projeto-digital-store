import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Banner from "./Banner";
// Imagens 
import image1 from '../assets/product-view-slide.png';
import image2 from '../assets/product-view-slide.png';
import image3 from '../assets/product-view-slide.png';
import image4 from '../assets/product-view-slide.png';
import image5 from '../assets/product-view-slide.png';

function Carrossel2() {

  const images = [
    { src: image1, alt: "First Slide" },
    { src: image2, alt: "Second Slide" },
    { src: image3, alt: "Third Slide" },
    { src: image4, alt: "Fourth Slide" },
    { src: image5, alt: "Fifth Slide" }
  ];

  return (
    <div>
      <Carousel variant="dark" indicators={null} fade controls keyboard={true} interval={null} pause="hover" slide={true} style={{ borderRadius: 4, width: 700.73, height: 571, display: 'flex', alignItems: 'center', backgroundColor: '#E2E3FF' }}>

        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="" src={image.src} alt={image.alt} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}

      </Carousel>
    </div >
  )
}

export default Carrossel2
