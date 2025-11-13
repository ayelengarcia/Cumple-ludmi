import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;

  .dev {
    background-color:  #ff66c4;
    z-index: 9999;
    color: white;
  }

  .dev-text,
  .bi-instagram {
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    color: white;
    cursor: pointer;
    padding: 1px 7px;
  }

  a:hover {
    background-color: white;
    color: black;
    border-radius: 3px;
    transition: 0.5s;
  }
`;
