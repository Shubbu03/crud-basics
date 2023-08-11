import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [id, setId] = useState(0);

  const [latestValue, setLatestValue] = useState({ name: "", email: "" });

  const [updateError, setUpdateError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setLatestValue({
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
    });
  }, []);

  function handleUpdate(e) {
    e.preventDefault();

    if (latestValue.name.length == 0 || latestValue.email.length == 0) {
      setUpdateError(true);
    }

    if (updateError) {
      axios
        .put(`https://64c780cf0a25021fde92945e.mockapi.io/crud/${id}`, {
          name: latestValue.name,
          email: latestValue.email,
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
              value={latestValue.name}
              onChange={(e) =>
                setLatestValue({
                  name: e.target.value,
                  email: latestValue.email,
                })
              }
            />

            {updateError && latestValue.name.length <= 0 ? (
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
            value={latestValue.email}
            onChange={(e) =>
              setLatestValue({ name: latestValue.name, email: e.target.value })
            }
          />

          {updateError && latestValue.email.length <= 0 ? (
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
      </form>
    </>
  );
};

export default Update;
