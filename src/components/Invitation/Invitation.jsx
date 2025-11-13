import { Invitation } from "./Invitation.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const certificate = () => {
  return (
    <Invitation
      id="invitacion"
      className=" row container-fluid d-flex justify-content-center py-5 px-3 mx-0"
    >
      <div className="box d-flex flex-column align-items-center">
        <div
          className="d-flex flex-column align-items-center content_box"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-offset="50"
        >

          <p className="texto mt-1">DICEN QUE LOS 30 SON</p>
          <p className="texto">LOS NUEVOS 20... PERO CON</p>
          <p className="texto">MÁS ONDA Y MENOS RESACA,</p>
          <p className="texto">¡TE ESPERO PARA BRINDAR!</p>

          <img src="/assets/brindis.gif" alt="Copas" className="logo mb-0" />
          
        </div>
      </div>
    </Invitation>
  );
};

export default certificate;
