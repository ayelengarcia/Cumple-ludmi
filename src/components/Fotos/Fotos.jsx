import { Fotos } from "./Fotos.styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { QRCodeCanvas } from "qrcode.react"; // 👈 Importamos el generador QR

AOS.init();

const FotosSection = () => {
  const driveLink =
    "https://drive.google.com/drive/folders/1g8YZoUAEgn6VF_MxtVYL8T_uiaeXGpxx";

  const abrirLink = () => {
    window.open(driveLink, "_blank");
  };

  return (
    <Fotos
      id="fotos"
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
          <img src="/assets/Fotos.gif" alt="Fotos" className="logo" />

          <p className="text-4 mt-1 mb-3">QR DE FOTOS</p>

          {/* 📸 QR Code */}
          <div className="qr-container mb-3">
            <QRCodeCanvas
              value={driveLink}
              size={180}
              bgColor="white"
              fgColor="#ff66c4"
              includeMargin={true}
              style={{ borderRadius: "10px", padding: "8px" }}
            />
          </div>

          <p className="text-2 mb-3">Si no pudiste escanear</p>

          <button className="btn-qr mb-5" onClick={abrirLink}>
            SUBIR ACÁ
          </button>
        </div>
      </div>
    </Fotos>
  );
};

export default FotosSection;

