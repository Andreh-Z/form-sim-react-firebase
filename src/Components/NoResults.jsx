import React from "react";
import { Button } from "react-bootstrap";

export default function NoResults() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="text-center">
      <h1 id="titulos">¡Aun no se ha registrado nadie, se el primero!</h1>
      <Button className="mt-5" onClick={handleRefresh}>
        Refrescar
      </Button>
    </div>
  );
}
