import { useState } from "react";
import { Asistencia } from "./Asistencia.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AsistenciaForm = () => {
  // --- Estados del primer formulario ---
  const [nombres, setNombres] = useState([""]);
  const [restricciones, setRestricciones] = useState([""]);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");
  const [mensajeLimite, setMensajeLimite] = useState("");

  // --- Estados del segundo formulario ---
  const [cancion, setCancion] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [mensajeCancion, setMensajeCancion] = useState("");

  // --- Estados de carga ---
  const [enviandoAsistencia, setEnviandoAsistencia] = useState(false);
  const [enviandoCancion, setEnviandoCancion] = useState(false);

  // --- URL del Apps Script ---
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw69kDseiC956V4XcZoZpEVDo5uKR1nWUiqTs_8nCxmkzUELB6QbW9KeKKucz9DeeouiA/exec";

  // --- Agregar persona ---
  const agregarPersona = () => {
    if (nombres.length < 5) {
      setNombres([...nombres, ""]);
      setRestricciones([...restricciones, ""]);
      setMensajeLimite("");
    } else {
      setMensajeLimite("Solo puede agregar hasta 5 personas a la vez.");
      setTimeout(() => setMensajeLimite(""), 3000);
    }
  };

  // --- Eliminar persona ---
  const eliminarPersona = (index) => {
    if (nombres.length > 1) {
      const nuevosNombres = [...nombres];
      const nuevasRestricciones = [...restricciones];
      nuevosNombres.splice(index, 1);
      nuevasRestricciones.splice(index, 1);
      setNombres(nuevosNombres);
      setRestricciones(nuevasRestricciones);
      setMensajeLimite("");
    }
  };

  // --- Manejar cambios ---
  const handleNombreChange = (index, value) => {
    const nuevos = [...nombres];
    nuevos[index] = value;
    setNombres(nuevos);
  };

  const handleRestriccionChange = (index, value) => {
    const nuevas = [...restricciones];
    nuevas[index] = value;
    setRestricciones(nuevas);
  };

  // --- Enviar CONFIRMACIÓN ---
  const handleSubmitAsistencia = async (e) => {
    e.preventDefault();
    if (enviandoAsistencia || enviandoCancion) return;

    setEnviandoAsistencia(true);

    const personas = nombres.map((nombre, index) => ({
      nombre,
      restriccion: restricciones[index] || "",
    }));

    const formData = new FormData();
    formData.append("hoja", "Confirmacion de Asistencia");
    formData.append("personas", JSON.stringify(personas));

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setMensajeConfirmacion("¡Gracias por confirmar tu asistencia!");
      setNombres([""]);
      setRestricciones([""]);
      setTimeout(() => setMensajeConfirmacion(""), 1500);
    } catch (err) {
      setMensajeConfirmacion("Hubo un error, intentá de nuevo.");
    } finally {
      setEnviandoAsistencia(false);
    }
  };

  // --- Enviar CANCIÓN ---
  const handleSubmitCancion = async (e) => {
    e.preventDefault();
    if (enviandoAsistencia || enviandoCancion) return;

    setEnviandoCancion(true);

    const formData = new FormData();
    formData.append("hoja", "Sugerencias de Canciones");
    formData.append("cancion", cancion);
    formData.append("comentarios", comentarios);

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setMensajeCancion("🎵 ¡Gracias por tu sugerencia!");
      setCancion("");
      setComentarios("");
      setTimeout(() => setMensajeCancion(""), 1500);
    } catch (err) {
      setMensajeCancion("Hubo un error, intentá de nuevo.");
    } finally {
      setEnviandoCancion(false);
    }
  };

  return (
    <Asistencia
      id="asistencia"
      className="row container-fluid d-flex justify-content-center py-5 px-3 mx-0"
    >
      <div className="box d-flex flex-column align-items-center">
        <div
          className="d-flex flex-column align-items-center content_box"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          {/* -------- CONFIRMACIÓN DE ASISTENCIA -------- */}
          <p className="texto mb-4">CONFIRMACIÓN DE ASISTENCIA</p>

          <form className="form-asistencia" onSubmit={handleSubmitAsistencia}>
            {nombres.map((nombre, index) => (
              <div key={index} className="grupo-input mb-2">
                <div className="d-flex align-items-center gap-2">
                  <input
                    className="mb-2"
                    type="text"
                    placeholder="Nombre y Apellido"
                    value={nombre}
                    onChange={(e) => handleNombreChange(index, e.target.value)}
                    required
                    disabled={enviandoAsistencia || enviandoCancion}
                  />
                  {nombres.length > 1 && (
                    <button
                      type="button"
                      className="btn-quitar"
                      onClick={() => eliminarPersona(index)}
                      disabled={enviandoAsistencia || enviandoCancion}
                    >
                      –
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Restricción alimentaria (opcional)"
                  value={restricciones[index]}
                  onChange={(e) =>
                    handleRestriccionChange(index, e.target.value)
                  }
                  disabled={enviandoAsistencia || enviandoCancion}
                />
              </div>
            ))}

            <button
              type="button"
              className="btn-agregar"
              onClick={agregarPersona}
              disabled={enviandoAsistencia || enviandoCancion}
            >
              + Agregar persona
            </button>

            {/* Mensaje de límite */}
            {mensajeLimite && <p className="mensaje-exito">{mensajeLimite}</p>}

            <button
              type="submit"
              className="btn-enviar pulse mt-3"
              disabled={enviandoAsistencia || enviandoCancion}
            >
              {enviandoAsistencia ? "Enviando..." : "CONFIRMAR ASISTENCIA"}
            </button>

            {mensajeConfirmacion && (
              <p className="mensaje-exito">{mensajeConfirmacion}</p>
            )}
          </form>

          {/* -------- SEPARADOR -------- */}
          <hr className="separador" />

          {/* -------- SUGERIR CANCIÓN -------- */}
          <p className="texto mb-4">¿QUERÉS SUGERIR UNA CANCIÓN?</p>

          <form className="form-cancion" onSubmit={handleSubmitCancion}>
            <input
              type="text"
              name="cancion"
              placeholder="Nombre de la canción o artista"
              value={cancion}
              onChange={(e) => setCancion(e.target.value)}
              required
              disabled={enviandoAsistencia || enviandoCancion}
            />

            <textarea
              name="comentarios"
              placeholder="Comentarios (opcional)"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              rows="3"
              disabled={enviandoAsistencia || enviandoCancion}
            />

            <button
              type="submit"
              className="btn-enviar pulse"
              disabled={enviandoAsistencia || enviandoCancion}
            >
              {enviandoCancion ? "Enviando..." : "ENVIAR SUGERENCIA"}
            </button>

            {mensajeCancion && (
              <p className="mensaje-exito">{mensajeCancion}</p>
            )}
          </form>
        </div>
      </div>
    </Asistencia>
  );
};

export default AsistenciaForm;
