import { Cuando } from "./Cuando..styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const cuando = () => {


  return (
    <Cuando
      id="ubicacion"
      className="container-fluid d-flex justify-content-center align-items-center py-3 mb-3"
    >
      <div className="d-flex flex-column justify-content-center align-items-center gap-1">

        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-offset="50"
          className="container d-flex flex-column justify-content-center align-items-center"
        >
          <img src="/assets/calendar.gif" alt="Calendario" className="logo" />

          <p className="text-4 mt-1 mb-3">¿CUÁNDO?</p>
          <p className="text-2 mb-2">SÁBADO 7 DE DICIEMBRE</p>
          <p className="text mb-3">20:00 HS</p>

        </div>
      </div>
    </Cuando>
  );
};

export default cuando;
