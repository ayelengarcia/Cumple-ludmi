import { Frase } from "./Frase.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const frase = () => {
  return (
    <Frase
      id="frase"
      className="row container-fluid d-flex justify-content-center py-5 px-3 mx-0 mb-4"
    >
      <div className="box d-flex flex-column align-items-center">
        <div
          className="d-flex flex-column align-items-center content_box"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="50"
          data-aos-offset="50"
        >

          <p className="text-2 mb-0">¡ESTÁS INVITADX A MIS</p>
          <img src="/assets/no30.gif" alt="no30" className="logo mb-3"/>
          
          <p className="texto ">Sí, llegué al tercer escalón y</p>
          <p className="texto">quiero festejarlo con vos mooor!</p>

        </div>
      </div>
    </Frase>
  );
};

export default frase;