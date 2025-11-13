import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carrusel } from "./Carrusel.styled";

const Carrousel = () => {
  // eslint-disable-next-line react/prop-types
  const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow arrow-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

  // eslint-disable-next-line react/prop-types
  const NextArrow = ({ onClick }) => (
    <div className="slick-arrow arrow-next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  // Estado dinámico según tamaño de pantalla
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth <= 769) setSlidesToShow(1);
      else if (window.innerWidth <= 1200) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    updateSlides(); // Detecta al cargar
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200, // <= 1200px → Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769, // <= 769px → Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Carrusel>
      <Slider {...settings} className="m-0 mb-4 px-0">
        <div className="container-novios">
          <img src="/assets/foto4.jpg" alt="Logo" className="novios" />
        </div>

        <div className="container-novios">
          <img src="/assets/foto5.jpg" alt="Logo" className="novios" />
        </div>

        <div className="container-novios">
          <img src="/assets/foto6.jpg" alt="Logo" className="novios" />
        </div>

        <div className="container-novios">
          <img src="/assets/foto4.jpg" alt="Logo" className="novios" />
        </div>

        <div className="container-novios">
          <img src="/assets/foto5.jpg" alt="Logo" className="novios" />
        </div>

        <div className="container-novios">
          <img src="/assets/foto6.jpg" alt="Logo" className="novios" />
        </div>
      </Slider>
    </Carrusel>
  );
};

export default Carrousel;
