import { useState } from "react";
import { Regalos } from "./Regalos.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const RegalosSection = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);

  const alias = "ALIAS.MP";

  const copiarAlias = () => {
    navigator.clipboard.writeText(alias);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  };

  return (
    <Regalos
      id="regalos"
      className="row container-fluid d-flex justify-content-center p-5 px-3 mx-0 mb-4"
    >
      <div className="container d-flex flex-column justify-content-center align-items-center gap-1">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-offset="50"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <p className="text mt-5 mb-2">REGALOS</p>
          <br />

          <img src="/assets/REGALOS.png" alt="Recepción" className="logo" />
          <p className="text-2 m-0">Si deseas regalarme algo más </p>
          <p className="text-2 m-0">que tu hermosa presencia,</p>
          <p className="text-2 m-0">te dejo mi alias</p>

          <button
            type="button"
            className="btn-cuenta pulse my-4"
            onClick={() => setMostrarModal(true)}
          >
            VER CUENTA
          </button>
          <br />
        </div>
      </div>

      {/* --- MODAL --- */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={() => setMostrarModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer clic dentro
          >
            <button className="modal-close" onClick={() => setMostrarModal(false)}>
              ✕
            </button>
            <h3>Alias de cuenta</h3>
            <p className="alias-text">{alias}</p>
            <button className="btn-copiar" onClick={copiarAlias}>
              {copiado ? "¡Copiado!" : "Copiar alias"}
            </button>
          </div>
        </div>
      )}
    </Regalos>
  );
};

export default RegalosSection;
