// import React ,{useState}from "react";

// function InputField() {

//   const [values, setValues] = useState({ name: "", email: "" });

//   const [errors, setErrors] = useState(false);

//   const validate = (e) => {
//     e.preventDefault();

//     if (values.name.length == 0 && values.email.length == 0) {
//       setErrors(true);
//     }

//     if (errors) {
//       axios
//         .post("https://64c780cf0a25021fde92945e.mockapi.io/crud", {
//           name: values.name,
//           email: values.email,
//           header,
//         })

//         .then(() => {
//           history("/read");
//         });
//     }
//   };


//   return (
//     <>
//       <div>
//         <label for="exampleInputPassword1" class="form-label">
//           Name
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="exampleInputPassword1"
//           onChange={(e) => setValues({ name: values.name, email: "" })}
//         />
//       </div>

//       {errors && values.name.length <= 0 ? (
//         <label className="label-war">First Name can't be empty!!</label>
//       ) : (
//         ""
//       )}

//       <div>
//         <label for="exampleInputEmail1" class="form-label">
//           Email address
//         </label>
//       </div>

//       <input
//         type="email"
//         class="form-control"
//         id="exampleInputEmail1"
//         aria-describedby="emailHelp"
//         onChange={(e) => setValues({ name: values.name, email: values.email })}
//       />

//       {errors && values.email.length <= 0 ? (
//         <label className="label-war">Email can't be empty!!</label>
//       ) : (
//         ""
//       )}

//       <div id="emailHelp" class="form-text">
//         We'll never share your email with anyone else.
//       </div>

//       <button type="submit" class="btn btn-primary" onClick={validate}>
//           Submit
//         </button>
//     </>
//   );
// }

// export default InputField;


import React from "react";

function InputData(props) {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        class="form-control"
        id="exampleInputPassword1"
        value={props.value}
        onChange={(e) => props.setValues(e.target.value)}
      />

      {props.errors.length <= 0 ? (
        <label className="label-war">This field can't be left empty!!</label>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputData;
