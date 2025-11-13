import { Vestimenta } from "./Vestimenta.styles";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const vestimenta = () => {


  return (
    <Vestimenta
      id="ubicacion"
      className="container-fluid d-flex justify-content-center align-items-center p-3 mx-0 m-4"
    >
      <div className="d-flex flex-column justify-content-center align-items-center gap-1">

        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-offset="50"
          className="container d-flex flex-column justify-content-center align-items-center"
        >
          <img src="/assets/diamante.gif" alt="Calendario" className="logo" />

          <p className="text-4 mt-1 mb-3">DRESS CODE</p>
          <p className="text-2 mb-5">ELEGANTE - SPORT</p>

        </div>
      </div>
    </Vestimenta>
  );
};

export default vestimenta;
