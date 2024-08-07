import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Shoes from '../assets/shoes.png'
import Banner from "./Banner";
// Imagens 
import image1 from '../assets/homeSlides/home-slide-1.jpeg';
import image2 from '../assets/homeSlides/home-slide-2.jpeg';
import image3 from '../assets/homeSlides/home-slide-3.jpeg';
import image4 from '../assets/homeSlides/home-slide-4.jpeg';
import image5 from '../assets/homeSlides/home-slide-5.jpeg';
import image6 from '../assets/homeSlides/home-slide-6.jpeg';
import image7 from '../assets/homeSlides/home-slide-7.jpeg';
import image8 from '../assets/homeSlides/home-slide-8.jpeg';


function Carrossel() {

  const images = [
    { src: image1, alt: "First Slide" },
    { src: image2, alt: "Second Slide" },
    { src: image3, alt: "Third Slide" },
    { src: image4, alt: "Fourth Slide" },
    { src: image5, alt: "Fifth Slide" },
    { src: image6, alt: "Sixth Slide" },
    { src: image7, alt: "Seventh Slide" },
    { src: image8, alt: "Eighth Slide" }
  ];

  return (
    <div>
      {/* Variant muda a cor geral para branco ou escuro
      keyboard permite usar a setas do teclado para mudar o carrosel
      pause permite que ao colocar o mouse em cima do carrosel ele para
      slide travar o carrousel*/}
      <Carousel variant="dark" fade controls keyboard={true} pause="hover" slide={true} style={{ borderRadius: 4}}>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <Banner />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        {images.map((image, index) => (
          <Carousel.Item key={index} style={{ objectFit: 'contain' }}>
            <img className="d-flex w-100" src={image.src} alt={image.alt} style={{ height: 681}} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div >
  )
}

export default Carrossel