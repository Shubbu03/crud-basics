import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://64c780cf0a25021fde92945e.mockapi.io/crud", {
        name: name,
        email: email,
        header,
      })

      .then(() => {
        history("/read");
      });
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
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
