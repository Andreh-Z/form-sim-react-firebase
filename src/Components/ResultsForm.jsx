import React, { useState, useEffect } from "react";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  Table,
  Spinner,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NoResults from "./NoResults";

export default function ResultsForm() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(""); // variable de estado para almacenar el valor de la búsqueda
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setResults(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getUsers();
    console.log(results);
  }, []);

  // función para filtrar los resultados
  const handleSearch = () => {
    const filteredResults = results.filter((result) =>
      result.full_name.includes(searchValue)
    );
    setResults(filteredResults);
  };

  // controlador de eventos para actualizar la variable de estado searchValue cuando el usuario escribe en el input
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex min-vw-100 flex-column bg-white text-dark"
    >
      <div className="mt-5">
        <h1 id="titulos">Tabla de inscriptos:</h1>
        <br />
        {/* formulario de búsqueda */}
        <Form inline className="w-25 d-flex gap-3">
          <FormControl
            type="text"
            placeholder="Escribe el nombre a buscar"
            value={searchValue}
            onChange={handleChange}
          />
          <Button onClick={handleSearch}>Buscar</Button>
        </Form>
        <br />
        {isLoading ? (
          <Spinner animation="border" size="lg" />
        ) : (
          <>
            {results.length === 0 ? (
              <NoResults />
            ) : (
              <Table striped bordered hover className="shadow-lg show">
                <thead>
                  <tr>
                    <th>Nombre completo</th>
                    <th>Correo electronico</th>
                    <th>Fecha de nacimiento</th>
                    <th>Pais de origen</th>
                    <th>¿Ha aceptado los terminos?</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result) => {
                    return (
                      <tr>
                        <td>{result.full_name}</td>
                        <td>{result.email}</td>
                        <td>{result.birth_date}</td>
                        <td>{result.country_of_origin}</td>
                        <td>
                          {result.terms_and_conditions === true
                            ? "aceptado"
                            : "no aceptado"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </>
        )}
        <div className="d-flex flex-row gap-4 justify-content-center mt-5">
          <Button id="button">
            <Link className="text-white" to="/">
              Inicio
            </Link>
          </Button>

          <Button id="button">
            <Link className="text-white" to="/home">
              Crear
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}
