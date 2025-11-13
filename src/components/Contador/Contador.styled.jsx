import styled from "styled-components";

export const Contador = styled.div`

  .container {
   margin-top: -70px;
  }

  .contador{
    position: relative;
    font-size: 1.5rem;
    color: white;
    display: flex;
    justify-content: center;
  }

  .cont{
    font-size: 1.5rem;
    margin: 0px;
    padding: 0px;
  }

  .text{
    font-size: .8rem;
    color: #ffeae8;
    font-weight: 400;
  }

  .cuadrito{
    background:rgba(255, 102, 196, 0.8) ;
    width: 80px;
    z-index: 9999999;
    border: 2px solid rgba(84, 84, 84, 0.15);
    padding: 10px;
  }

  @media (min-width: 769px) {


  .cont{
    font-size: 2rem;
  }

  .text{
    font-size: 1rem;
  }

  .cuadrito{
    width: 100px;
    padding: 10px 15px;
  }

  }
`;
