import { Final } from "./Final.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const FinalSection = () => {
  return (
    <Final
      id="final"
      className="container-fluid d-flex justify-content-center align-items-center p-5 px-0 mx-0"
    >
      <div
        data-aos="zoom-in-up"
        data-aos-duration="600"
        data-aos-delay="50"
        className="container d-flex flex-column justify-content-center align-items-center text-center"
      >

        <img
          src="/assets/Besos.gif"
          alt="Besos"
          className="gif-besos"
        />
        <p className="text-final mb-5">¡TE ESPERO!</p>

      </div>
    </Final>
  );
};

export default FinalSection;
