import styled from "styled-components";

export const Final = styled.div`
  background: white;
  color: #ff66c4;
  width: 100%;
  position: relative;

  .text-final {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: #ff66c4;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (min-width: 769px) {
  }
`;
