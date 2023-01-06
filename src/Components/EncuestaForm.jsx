import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function EncuestaForm() {
  const [data, setData] = useState();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const usersCollectionRef = collection(db, "users");
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "argentina", // Evita que si no selecciona una primera opcion(la cual es argentina) se aplique el valor por defecto.
    terms_and_conditions: false,
  });

  async function fetchData() {
    try {
      const response = await fetch("/db.json");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setInput({
        ...input,
        [name]: checked,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);
    setIsSubmitting(true); // cambiamos el estado de envío a "en progreso"
    //envio del formulario
    await addDoc(usersCollectionRef, {
      full_name: input.full_name,
      email: input.email,
      birth_date: input.birth_date,
      country_of_origin: input.country_of_origin,
      terms_and_conditions: input.terms_and_conditions,
    });
    setIsSubmitting(false); // cambiamos el estado de envío a "completado"
    navigate("/done");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <div id="contenedor-creacion"></div>
        </Col>
        <Col
          lg={6}
          className="m-auto d-flex flex-column border shadow-lg pt-5 pb-5 rounded"
        >
          <h1 id="typing">Por favor, complete el formulario.</h1>
          <blockquote class="blockquote">
            <p className="text-muted">
              Utilice información real, dichos datos son almacenados en nuestra
              base de datos...
            </p>
          </blockquote>
          <Form
            onSubmit={(e) => handleSubmit(e)}
            errors={errors}
            className="d-flex flex-column gap-4"
          >
            {data &&
              data.items.map((item) => {
                if (item.type === "text") {
                  return (
                    <Form.Group>
                      <Form.Label>{item.label}</Form.Label>
                      <Form.Control
                        type={item.type}
                        name={item.name}
                        required={item.required}
                        value={input[item.name]}
                        onChange={(e) => handleChange(e)}
                        isInvalid={!!errors[item.name]}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors[item.name]}
                      </Form.Control.Feedback>
                    </Form.Group>
                  );
                } else if (item.type === "email") {
                  return (
                    <Form.Group>
                      <Form.Label>{item.label}</Form.Label>
                      <Form.Control
                        type={item.type}
                        name={item.name}
                        required={item.required}
                        value={input[item.name]}
                        onChange={(e) => handleChange(e)}
                        isInvalid={!!errors[item.name]}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors[item.name]}
                      </Form.Control.Feedback>
                    </Form.Group>
                  );
                } else if (item.type === "date") {
                  return (
                    <Form.Group>
                      <Form.Label>{item.label}</Form.Label>
                      <Form.Control
                        type={item.type}
                        name={item.name}
                        required={item.required}
                        value={input[item.name]}
                        onChange={(e) => handleChange(e)}
                        isInvalid={!!errors[item.name]}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors[item.name]}
                      </Form.Control.Feedback>
                    </Form.Group>
                  );
                } else if (item.type === "select") {
                  return (
                    <Form.Group>
                      <Form.Label>{item.label}</Form.Label>
                      <Form.Control
                        as="select"
                        name={item.name}
                        required={item.required}
                        value={input[item.name]}
                        onChange={(e) => handleChange(e)}
                        isInvalid={!!errors[item.name]}
                      >
                        {item.options.map((option) => {
                          return (
                            <option value={option.value}>{option.label}</option>
                          );
                        })}
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors[item.name]}
                      </Form.Control.Feedback>
                    </Form.Group>
                  );
                } else if (item.type === "checkbox") {
                  return (
                    <Form.Group>
                      <Form.Check
                        type={item.type}
                        label={item.label}
                        name={item.name}
                        required={item.required}
                        checked={input[item.name]}
                        onChange={(e) => handleChange(e)}
                        isInvalid={!!errors[item.name]}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors[item.name]}
                      </Form.Control.Feedback>
                    </Form.Group>
                  );
                } else if (item.type === "submit") {
                  return (
                    <div className="d-flex flex-column align-items-center gap-3">
                      <Button id="button" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <Spinner animation="border" size="sm" />
                        ) : (
                          "Enviar"
                        )}
                      </Button>
                      <Button id="button2" className="flash">
                        <Link className="text-white" to="/results">
                          Quiero ver la tabla
                        </Link>
                      </Button>
                    </div>
                  );
                }
              })}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
