import React from "react";
import bg5 from "../Assets/bg-5.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Done() {
  return (
    <div>
      <div id="imagen">
        <div className="d-flex justify-content-center flex-column align-items-center h-100 gap-4">
          <h1 className="text-white mb-0 w-75 fs-1 text-center">
            ¡Todo luce bien!
          </h1>
          <p id="p" className="text-white">
            Has completado la información de forma correcta, y hemos recibido tu
            inscripción con éxito.
          </p>
          <h4 id="h4" className="text-white">
            ¿Deseas ver la tabla de inscriptos para asesorarte que estás en ella
            por ti mismo/a?
          </h4>
          <div className="d-flex flex-column gap-3 ">
            <Button variant="success">
              <Link className="text-black fs-5" to="/results">
                Si quiero
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
