import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorN, setErrorN] = useState(false);
  const [errorEm, setErrorEm] = useState(false);
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0) {
      setErrorN(true);
    }

    if (email.length == 0) {
      setErrorEm(true);
    }

    if (errorN && errorEm) {
      axios
        .post("https://64c780cf0a25021fde92945e.mockapi.io/crud", {
          name: name,
          email: email,
          header,
        })

        .then(() => {
          history("/read");
        });
    }
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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {errorN && name.length<=0? (
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
            onChange={(e) => setEmail(e.target.value)}
          />

          {errorEm && email.length<=0? (
            <label className="label-war">Email can't be empty!!</label>
          ) : (
            ""
          )}

          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>

        {/* <button type="submit" class="btn btn-primary">
          Submit
        </button> */}
      </form>
    </>
  );
};

export default Create;
