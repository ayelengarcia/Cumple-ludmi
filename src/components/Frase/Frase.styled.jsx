import styled from "styled-components";

export const Frase = styled.div`
  background:rgba(255, 102, 196, 0.8);
  color: white;
  position: relative;
  border: 2px solid rgba(84, 84, 84, 0.15);

  .box {
    border-top: 1px solid  white;
    border-bottom: 1px solid  white;
    padding: 2rem 0px;
  }

  .texto {
    font-size: .9rem;
    letter-spacing: 2px;
    margin: 0;
  }
  
  .text-2 {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  .hidden {
    color: transparent;
  }

  @media (min-width: 769px) {
    .img_fecha {
      width: 18rem;
    }

    .texto {
    font-size: 1rem;
    letter-spacing: 2px;
    margin: 0;
  }
  
  .text-2 {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
  }
`;
