import styled from "styled-components";

export const Carrusel = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 1rem 0;

  .slick-slider {
    overflow: hidden;
  }

  .container-novios {
      padding: 1rem;
      margin-left: -7px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .container-novios:hover {
    transform: scale(1.015);
  }

  .novios {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 5px 5px 0px 0px rgba(255, 102, 196, 0.78), 10px 10px 0px 0px rgba(255, 102, 196, 0.56), 15px 15px 0px 0px rgba(255, 102, 196, 0.38), 5px 5px 15px 5px rgba(0,0,0,0);
  }

  /* Dots (puntos de navegación) */
  .slick-dots {
    bottom: -25px;
  }

  .slick-dots li button:before {
    color: #999;
    font-size: 10px;
    transition: color 0.3s ease;
  }

  .slick-dots li.slick-active button:before {
    color: rgba(255, 102, 196, 0.94);
  }

  /* Flechas personalizadas */
  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: none !important;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    color: #444;
  }

  .arrow-prev {
    left: 15px;
  }

  .arrow-next {
    right: 15px;
  }

  .slick-arrow:hover {
    background-color: rgba(255, 102, 196, 0.94);
    color: white;
  }

  /* Ocultar flechas en mobile */
  @media (min-width: 768px) {
    .slick-arrow {
      display: flex !important;
    }

  .container-novios {
    padding: .8rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-left: 0px;
  }

  }
`;
