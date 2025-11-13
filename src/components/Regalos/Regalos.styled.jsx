import styled from "styled-components";

export const Regalos = styled.div`
  color: white;
  width: 100%;
  position: relative;
  background: rgba(255, 102, 196, 0.8);
  border: 2px solid rgba(84, 84, 84, 0.15);

  .container {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  .text {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: white;
  }

  .text-2 {
    font-size: .9rem;
    letter-spacing: 2px;
    color: #545454;
    font-weight: 400;
  }

  .btn-cuenta {
    padding: 10px 20px;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    background: transparent;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.3s;
  }

  .btn-cuenta:hover {
    background-color: white;
    color: #ff66c4;
  }

  /* --- MODAL --- */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    animation: fadeIn 0.3s ease-in-out;
  }

  .modal-content {
    background: white;
    color: #ff66c4;
    border-radius: 12px;
    padding: 2rem;
    position: relative;
    width: 90%;
    max-width: 350px;
    text-align: center;
    box-shadow: 0 0 15px rgba(255, 102, 196, 0.4);
    animation: popUp 0.3s ease-in-out;
  }

  .modal-close {
    position: absolute;
    top: 10px;
    right: 12px;
    background: transparent;
    border: none;
    color: #ff66c4;
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.3s;
  }

  .modal-close:hover {
    transform: scale(1.2);
  }

  .alias-text {
    font-size: 1.2rem;
    font-weight: 700;
    color: #ff66c4;
    margin: 1rem 0;
    letter-spacing: 1px;
  }

  .btn-copiar {
    background-color: #ff66c4;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn-copiar:hover {
    background-color: #ff89d6;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes popUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

 @media (min-width: 769px) {
  .text-2 {
    font-size: 1rem;
  }
  }
`;
