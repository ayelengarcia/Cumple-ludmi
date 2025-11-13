import { Itinerario } from "./Itinerario.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const itinerario = () => {


  return (
    <Itinerario
      id="itinerario"
      className="row container-fluid d-flex justify-content-center p-4 mx-0 mb-4"
    >
      <div className="container d-flex flex-column justify-content-center align-items-center gap-1">

        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-offset="50"
          className="d-flex flex-column justify-content-center align-items-center"
        >

          <div className="container-itinerario mt-4">
            <img src="/assets/Itinerario.gif" alt="Itinerario" className="logo mb-0" />
            <p className="text m-0">ITINERARIO</p>
          </div>
          <br />

          <img src="/assets/RECEPCION.png" alt="Recepción" className="logo mt-2" />
          <p className="text-2 m-0">RECEPCIÓN</p>
          <p className="hs">20:00 HS</p>
          <br />

          <img src="/assets/BRINDIS.png" alt="Brindis" className="logo mt-2" />
          <p className="text-2 m-0">BRINDIS</p>
          <p className="hs">00:00 HS</p>
          <br />

          <img src="/assets/FIESTA.png" alt="Fiesta" className="logo mt-2" />
          <p className="text-2 m-0">FIESTA</p>
          <p className="hs">00:30 HS</p>
          <br />

        </div>
      </div>
    </Itinerario>
  );
};

export default itinerario;