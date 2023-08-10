import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ConfirmBox from "./ConfirmBox";

const Read = () => {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const [deleteData, setDeleteData] = useState(false);

  function getData() {
    axios
      .get("https://64c780cf0a25021fde92945e.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleDelete() {
    axios
      .delete(
        `https://64c780cf0a25021fde92945e.mockapi.io/crud/${deleteData?.id}`
      )
      .then(() => {
        getData();
      });
  }

  function openDelete(data) {
    setOpen(true);
    setDeleteData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  function saveToLocalStorage(id, name, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }

  return (
    <>
      <div class="mb-3">
        <div className="d-flex justify-content-between m-2">
          <h2>Read!!</h2>
          <Link to="/">
            <button className="btn-primary">Enter Data</button>
          </Link>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          saveToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-failure"
                      onClick={() => openDelete(eachData)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>

      <ConfirmBox
        open={open}
        closeDialog={() => setOpen(false)}
        title={deleteData?.name}
        deleteFunc={handleDelete}
      />
    </>
  );
};

export default Read;
