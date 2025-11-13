import styled from "styled-components";

export const Title = styled.div`
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 1 1s ease-out;
  background-image: url(/assets/portada.gif);
  background-size: cover;
   background-position: center;
  background-repeat: no-repeat;
  padding: 0px !important;

  .presentacion {
    color: black;
    padding-top: 80px !important;
    overflow: hidden;
  }


  @media (min-width: 1200px) {
    background-image: url(/assets/portadapc2.gif); 
  }
`;
