import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, docs, doc } from "firebase/firestore";
import { Table } from "react-bootstrap";

export default function ResultsForm() {
  const [results, setResults] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setResults(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    console.log(results);
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Correo electronico</th>
            <th>Fecha de nacimiento</th>
            <th>Pais de origin</th>
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
    </div>
  );
}
