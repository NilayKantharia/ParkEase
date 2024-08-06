// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { NavLink, useNavigate, useLocation } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";

// export default function LoginPage({ onLogin }) {
//   const [mailId, setMailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("user"); // New state for role
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!mailId) {
//       setError("Please enter email.");
//       return;
//     }
//     if (!password) {
//       setError("Please enter password.");
//       return;
//     }
//     if (!role) {
//       setError("Please select a role.");
//       return;
//     }

//     setError("");

//     try {
//       const response = await axios.post("http://localhost:8000/login", {
//         mailId,
//         password,
//         role, // Include role in the request
//       });

//       if (response.data.success) {
//         setSuccess("Login successful");
//         setError("");
//         onLogin();
        
//         // Assuming the response contains the user role
//         const { role } = response.data;

//         // Redirect based on role
//         switch (role) {
//           case 'admin':
//             navigate('/adminDashboard');
//             break;
//           case 'hr':
//             navigate('/hrDashboard');
//             break;
//           case 'stallExecutive':
//             navigate('/stallDashboard');
//             break;
//           default:
//             navigate('/userDashboard');
//             break;
//         }
//         const from = location.state?.from?.pathname || "/";
//         navigate(from);
//       } else {
//         setError("Invalid email or password");
//         setSuccess("");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       setError("Login failed. Please try again.");
//       setSuccess("");
//     }
//   };

//   useEffect(() => {
//     (() => {
//       window.addEventListener("load", () => {
//         const forms = document.getElementsByClassName("needs-validation");
//         Array.prototype.filter.call(forms, (form) => {
//           form.addEventListener(
//             "submit",
//             (event) => {
//               if (form.checkValidity() === false) {
//                 event.preventDefault();
//                 event.stopPropagation();
//               }
//               form.classList.add("was-validated");
//             },
//             false
//           );
//         });
//       });
//     })();
//   }, []);

//   return (
//     <>
//       <div className="form-container">
//         <div className="container-sm mx-auto border border-0 rounded-4 p-3 mb-lg-5 mb-md-5 bg-body-tertiary col-md-12 col-lg-4 col-sm-12">
//           <h4 className="display-3">Login</h4>
//           <p>Get Back to the Enjoyment Park</p>
//           {error && <div className="alert alert-danger">{error}</div>}
//           {success && <div className="alert alert-success">{success}</div>}
//           <form
//             className="row needs-validation"
//             onSubmit={handleSubmit}
//             noValidate
//           >
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 placeholder="example@parkease.com"
//                 value={mailId}
//                 onChange={(e) => setMailId(e.target.value)}
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 required
//               />
//               <div className="invalid-feedback">Please enter email.</div>
//               <div id="emailHelp" className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="********"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 required
//               />
//               <div className="invalid-feedback">Please enter password.</div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="roleSelect" className="form-label">
//                 Select Role
//               </label>
//               <select
//                 id="roleSelect"
//                 className="form-select"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//               >
//                 <option value="">Select a role</option>
//                 <option value="admin">Admin</option>
//                 <option value="hr">HR</option>
//                 <option value="stallExecutive">Stall Executive</option>
//                 <option value="user">User</option>
//               </select>
//               <div className="invalid-feedback">Please select a role.</div>
//             </div>
//             <button type="submit" className="btn btn-primary mx-auto col-5">
//               Login
//             </button>
//           </form>
//           <p className="mt-3">
//             Don't have an account?{" "}
//             <NavLink to="/Registration" activeClassName="active" exact>
//               Sign up
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

export default function LoginPage({ onLogin }) {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!mailId || !password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");

    try {
      const response = await axios.post("http://localhost:8000/login", {
        mailId,
        password,
      },{
        withCredentials: true // Important: allows cookies to be sent and received
      });

      if (response.data.success) {
        setSuccess("Login successful");
        setError("");
        const role = response.data.role;
        onLogin(role);

        switch (role) {
          case 'admin':
            navigate('/adminDashboard');
            break;
          case 'hr':
            navigate('/hrDashboard');
            break;
          case 'stallExecutive':
            navigate('/stallDashboard');
            break;
          default:
            navigate('/userDashboard');
            break;
        }
      } else {
        setError("Invalid email or password");
        setSuccess("");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <div className="container-sm my-5 mx-auto border border-0 rounded-4 p-3 mb-lg-5 mb-md-5 bg-body-tertiary col-md-12 col-lg-4 col-sm-12">
        <h4 className="display-3">Login</h4>
        <p>Get Back to the Enjoyment Park</p>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form className="row needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@parkease.com"
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div className="invalid-feedback">Please enter email.</div>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
            <div className="invalid-feedback">Please enter password.</div>
          </div>
          <button type="submit" className="btn btn-primary mx-auto col-5">
            Login
          </button>
        </form>
        <p className="mt-3">
          Don't have an account?{" "}
          <NavLink to="/Registration" activeClassName="active" exact>
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

