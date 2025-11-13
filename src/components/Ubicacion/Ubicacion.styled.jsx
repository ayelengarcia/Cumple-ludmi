import styled from "styled-components";

export const Ubicacion = styled.div`
  background: white;
  color: #60b9ff;
  width: 100%;
  position: relative;

  h1 {
    font-family: "Lavishly Yours";
    line-height: 120%;
    font-size: 5rem;
    z-index: 10000;
    position: relative;
    color: white;
  }

  .text {
    font-size: 1rem;
    color: #60b9ff;
  }

  .text-2 {
    font-size: 1rem;
    letter-spacing: 2px;
    color: #ff66c4;
    font-weight: 600;
  }

  .text-3 {
    font-size: 1rem;
    letter-spacing: 1px;
    color:  #ff66c4;
  }

  .text-4 {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    color:  rgba(84, 84, 84, 0.89);
  }

  .bi{
    font-size: 1rem;
    color:  rgba(84, 84, 84, 0.89);
  }

  .iframe {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.288);
  }

  @media (min-width: 769px) {
  }
`;
