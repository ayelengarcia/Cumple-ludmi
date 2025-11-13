
import { Contador } from "./Contador.styled.jsx";
import "animate.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const contador = () => {
  
  //CUENTA REGRESIVA
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date("2025-12-10T21:00:00"); // Fecha objetivo

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [days, setDays] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hours, setHours] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [minutes, setMinutes] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [seconds, setSeconds] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance > 0) {
        const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      } else {
        // cuando el contador llega a cero hacer algo acá si es necesario
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Contador
      id="contador"
      className="d-flex justify-content-center fondo-presentacion m-0 py-4"
    >
      <div className="container">

        <div
          className="d-flex contador py-3 gap-2"
        >
          <div className="cuadrito d-flex flex-column align-items-center">
            <p className="cont">{days}</p>
            <span className="text">DÍAS</span>
          </div>
          <div className="cuadrito d-flex flex-column align-items-center">
            <p className="cont">{hours}</p>
            <span className="text">HRS</span>
          </div>
          <div className="cuadrito d-flex flex-column align-items-center">
            <p className="cont">{minutes}</p>
            <span className="text">MIN</span>
          </div>
          <div className="cuadrito d-flex flex-column align-items-center">
            <p className="cont">{seconds}</p>
            <span className="text">SEG</span>
          </div>
        </div>


      </div>
    </Contador>
  );
};

export default contador;
