import styled from "styled-components";

export const Fotos = styled.div`
  background: white;
  color: #d4bc88;
  width: 100%;
  position: relative;

  .text-2 {
    font-size: 1rem;
    letter-spacing: 2px;
    color:  #ff66c4;
  }

  .text-4 {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    color:rgba(84, 84, 84, 0.89);
  }

  .btn-qr {
    background-color: #ff66c4;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn-qr:hover {
    background-color: #ff89d6;
  }

  .qr-container {
  background: white;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}


  @media (min-width: 769px) {

  }
`;
