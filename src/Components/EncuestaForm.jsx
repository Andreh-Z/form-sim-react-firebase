import React from "react";
import { useState, useEffect } from "react";

export default function EncuestaForm() {
  const [data, setData] = useState();
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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input);
    // Envia el estado input al servidor
    fetch("/enviar", {
      method: "POST",
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

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
