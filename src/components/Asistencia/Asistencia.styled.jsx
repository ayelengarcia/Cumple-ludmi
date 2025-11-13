import styled from "styled-components";

export const Asistencia = styled.div`
  background-color: rgba(255, 102, 196, 0.8);
  color: white;
  position: relative;

  .box {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 4rem 0;
  }

  .texto {
    font-size: .9rem;
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  .form-asistencia,
  .form-cancion {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px;
  }

  input,
  textarea {
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 0.95rem;
    width: 100%;
    outline: none;
  }

  .btn-agregar, .btn-quitar {
    background: transparent;
    color: white;
    border: 1px dashed white;
    padding: 6px 10px;
    margin-top: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn-agregar:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .btn-enviar {
    padding: 10px 20px;
    font-size: .9rem;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    background: transparent;
    font-weight: 600;
    letter-spacing: 1px;
    transition: 0.3s;
  }

  .btn-enviar:hover {
    background-color: white;
    color: #ff66c4;
  }

  .mensaje-exito {
    margin-top: 10px;
    font-size: 0.95rem;
    font-weight: 500;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.25);
    padding: 8px 12px;
    border-radius: 5px;
    animation: fadeIn 0.4s ease-in-out;
  }

  .separador {
    width: 100px;
    border: 0;
    border-top: 1px solid white;
    margin: 2rem 0;
    opacity: 0.6;
  }


  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
