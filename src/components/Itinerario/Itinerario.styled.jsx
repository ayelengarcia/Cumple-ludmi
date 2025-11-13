import styled from "styled-components";

export const Itinerario = styled.div`
  color: white;
  width: 100%;
  position: relative;
  background: rgba(255, 102, 196, 0.8);
  border: 2px solid rgba(84, 84, 84, 0.15);

  .container{
    border: 1px solid white;
    margin: 0px;
    padding: 0px;
  }

  .container-itinerario{
    width: 100%;
    display: flex;
    position: relative;
    left: -15px;
    justify-content: center;
    align-items: center;
  }

  .logo{
   width: 70px;
   height: 70px;
  }

  .text {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: white;
  }

  .text-2 {
    font-size: 1rem;
    letter-spacing: 2px;
    color:  #545454;
    font-weight: 600;
  }

  .hs {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid white;
    padding-bottom: 30px;
  }

  @media (min-width: 769px) {
  .container-itinerario{
    left: -30px;
  }

  .logo{
   width: auto;
   height: auto;
  }
  }
`;
