/* eslint-disable react/jsx-no-target-blank */
import { Footer } from "./Footer.styled";

const footer = () => {
  return (
    <Footer className="d-flex  flex-column">
      <div className="dev d-flex justify-content-between align-items-center">
        <p className="dev-text  m-0 p-2">© Copyright - 2025</p>

        <p className="dev-text d-flex justify-content-between align-items-center m-0 p-2">
          Desarrollo Web:{" "}
          <a
            className="dev-text d-flex align-items-center no-wrap ms-1"
            href="https://www.instagram.com/digital.craft.ar/"
            target="_blank"
          >
            <i className="bi bi-suitcase-lg pe-1"></i>
            Digital Craft
          </a>
        </p>
      </div>
    </Footer>
  );
};

export default footer;
