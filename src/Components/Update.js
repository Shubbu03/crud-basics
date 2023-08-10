import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName1, setErrorName1] = useState(false);
  const [errorEmail1, setErrorEmail1] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  function handleUpdate(e) {
    e.preventDefault();

    if (name.length == 0) {
      setErrorName1(true);
    }

    if (email.length == 0) {
      setErrorEmail1(true);
    }

    if (errorName1 || errorEmail1) {
      axios
        .put(`https://64c780cf0a25021fde92945e.mockapi.io/crud/${id}`, {
          name: name,
          email: email,
        })
        .then(() => {
          navigate("/read");
        });
    }
  }

  return (
    <>
      <form>
        <div class="mb-3">
          <h2>Update!!</h2>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Name
            </label>

            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {errorName1 ? (
              <label className="label-war">First Name can't be empty!!</label>
            ) : (
              ""
            )}
          </div>
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {errorEmail1 ? (
            <label className="label-war">Email can't be empty!!</label>
          ) : (
            ""
          )}

          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>

        {/* <button type="submit" class="btn btn-primary">
          Update
        </button> */}
      </form>
    </>
  );
};

export default Update;
