import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Create.css";
import InputField from "./InputField";

const Create = () => {
  const [values, setValues] = useState({ name: "", email: "" });

  const [errors, setErrors] = useState(false);

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = () => {
    if (errors) {
      axios
        .post("https://64c780cf0a25021fde92945e.mockapi.io/crud", {
          name: values.name,
          email: values.email,
          header,
        })

        .then(() => {
          history("/read");
        });
    }
  };

  const validate = (e) => {
    e.preventDefault();

    if (values.name.length == 0 && values.email.length == 0) {
      setErrors(true);
    }

    setTimeout(handleSubmit, 1000);
  };

  return (
    <>
      <form>
        <div class="mb-3">
          <div className="d-flex justify-content-between m-2">
            <h2>Create!!</h2>
            <Link to="/read">
              <button className="btn-primary">Show Data</button>
            </Link>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setValues({ name: e.target.value, email: "" })}
            />
          </div>
          {errors && values.name.length <= 0 ? (
            <label className="label-war">First Name can't be empty!!</label>
          ) : (
            ""
          )}

          <div>
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
          </div>

          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) =>
              setValues({ name: values.name, email: e.target.value })
            }
          />

          {errors && values.email.length <= 0 ? (
            <label className="label-war">Email can't be empty!!</label>
          ) : (
            ""
          )}

          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>

          {/* <InputField  /> */}
        </div>

        <button type="submit" class="btn btn-primary" onClick={validate}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
