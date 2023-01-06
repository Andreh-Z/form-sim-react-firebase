import React from "react";
import { Button } from "react-bootstrap";

export default function NoResults() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="text-center">
      <h1 id="titulos">¡Aun no se ha registrado nadie, se el primero!</h1>
      <p id="parrafos">
        He dejado la base de datos vacia, para poder demostrar la cobertura del
        caso.
      </p>
      <Button onClick={handleRefresh}>Refrescar</Button>
    </div>
  );
}
