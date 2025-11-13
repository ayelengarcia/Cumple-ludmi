import { Ubicacion } from "./Ubicacion.styled";
import Iframe from "react-iframe";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ubicacion = () => {
 

  return (
    <Ubicacion
      id="ubicacion"
      className="container-fluid d-flex justify-content-center align-items-center py-0 mt-4"
    >
      <div className="container-ubica d-flex flex-column justify-content-center align-items-center gap-1">

        <div
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-offset="50"
          className="ubica d-flex flex-column justify-content-center align-items-center"
        >
          <p className="text-4 mt-3 mb-3">¿DÓNDE?</p>
          <p className="text-2 m-0"> <i className="bi bi-geo-alt-fill"> </i>QUINTA LA SONIA - HURLINGAM</p>
          <p className="text-3 m-0"> Calle Falsa 123, Barrio Nuevo.</p>

          <p className="text-4 mt-5 mb-3">¿CÓMO LLEGAR?</p>

          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6168.093406240825!2d-58.67510156637705!3d-34.58806226795952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbe98580f133d%3A0xda2d5c0107667df0!2sJuana%20Manuela%20Gorriti%203615%2C%20William%20C.%20Morris%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1704685114301!5m2!1ses-419!2sar"
            display="initial"
            position="relative"
            className="iframe mb-5"
          />
        </div>
      </div>
    </Ubicacion>
  );
};

export default ubicacion;
