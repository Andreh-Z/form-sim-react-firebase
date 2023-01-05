import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Form, Button, Col } from "react-bootstrap";

export default function EncuestaForm() {
  const [data, setData] = useState();
  const usersCollectionRef = collection(db, "users");
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
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

    //envio del formulario
    await addDoc(usersCollectionRef, {
      full_name: input.full_name,
      email: input.email,
      birth_date: input.birth_date,
      country_of_origin: input.country_of_origin,
      terms_and_conditions: input.terms_and_conditions,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {data &&
        data.items.map((item) => {
          if (item.type === "text") {
            return (
              <div>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  value={input[item.name]}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            );
          } else if (item.type === "email") {
            return (
              <div>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  value={input[item.name]}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            );
          } else if (item.type === "date") {
            return (
              <div>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  value={input[item.name]}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            );
          } else if (item.type === "select") {
            return (
              <div>
                <label>{item.label}</label>
                <select
                  name={item.name}
                  required={item.required}
                  value={input[item.name]}
                  onChange={(e) => handleChange(e)}
                >
                  {item.options.map((option) => {
                    return <option value={option.value}>{option.label}</option>;
                  })}
                </select>
              </div>
            );
          } else if (item.type === "checkbox") {
            return (
              <div>
                <label>{item.label}</label>
                <input
                  type={item.type}
                  name={item.name}
                  required={item.required}
                  checked={input[item.name]}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            );
          } else if (item.type === "submit") {
            return (
              <div>
                <input type={item.type} value={item.label} />
              </div>
            );
          }
        })}
    </form>
  );
}
