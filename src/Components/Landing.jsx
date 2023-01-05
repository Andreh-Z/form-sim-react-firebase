import React from "react";
import bg2 from "../Assets/bg-3.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="bg-image">
      <img
        src={bg2}
        className="img-fluid shadow-lg m-auto d-flex"
        alt="Sample"
      />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center flex-column align-items-center h-100 gap-4">
          <p className="text-white mb-0 w-75 fs-4 animation-slide" id="titulos">
            Funcionamientos cumplidos:
            <ul className="text-white fs-5" id="parrafos">
              <li>
                La página cuenta con un formulario de entrada de datos que
                cumple con todos los requisitos y validaciones necesarias.
              </li>
              <li>
                Tras enviar el formulario, se muestra una página de confirmación
                indicando que todo ha salido bien y proporcionando un enlace
                para ver los resultados.
              </li>
              <li>
                Los resultados se muestran en una tabla en una página separada.
              </li>
              <li>
                Se utilizaron React y React Bootstrap para la implementación de
                la interfaz de usuario y el estilo.
              </li>
              <li>
                React-Router para la gestión de enrutamiento y Firebase como
                base de datos.
              </li>
            </ul>
          </p>
          <div className="d-flex flex-column gap-3 ">
            <label className="text-white">Formulario de creacion</label>
            <Button id="button">
              <Link className="text-black fs-5" to="/home">
                Crear
              </Link>
            </Button>
            <label className="text-white">Paginado de "realizado"</label>
            <Button id="button2">
              <Link className="text-black fs-5" to="/done">
                Done
              </Link>
            </Button>
            <label className="text-white">Tabla de resultados</label>
            <Button id="button">
              <Link className="text-black fs-5" to="/results">
                Resultados
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
