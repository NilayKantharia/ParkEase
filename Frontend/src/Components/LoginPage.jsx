import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

export default function LoginPage({ onLogin }) {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const checkLoginStatus = async () => {
      const uid = Cookies.get("uid");
      if (uid) {
        try {
          const response = await axios.get("http://localhost:8000/checkLoginStatus", {
            withCredentials: true,
          });

          if (response.data.success) {
            const role = response.data.role;
            onLogin(role);
            Cookies.set('role', role);
            switch (role) {
              case "admin":
                navigate("/adminDashboard");
                break;
              case "hr":
                navigate("/hrDashboard");
                break;
              case "stallExecutive":
                navigate("/stallDashboard");
                break;
              default:
                navigate("/");
                break;
            }
          }
        } catch (error) {
          console.error("Failed to check login status:", error);
        }
      }
    };

    checkLoginStatus();
  }, [navigate, onLogin]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!mailId || !password) {
      setError("Please fill all fields.");
      return;
    }
  
    setError("");
  
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        { mailId, password },
        { withCredentials: true }
      );
  
      if (response.data.success) {
        setSuccess("Login successful");
        setError("");
        const role = response.data.role;
        const name = response.data.name;
        onLogin(role);
        Cookies.set('role', role);
        Cookies.set('name', name); // Store the name in cookies or state
  
        switch (role) {
          case "admin":
            navigate("/adminDashboard", { state: { name } });
            break;
          case "hr":
            navigate("/hrDashboard");
            break;
          case "stallExecutive":
            navigate("/stallDashboard");
            break;
          default:
            navigate("/");
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
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
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
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
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
          <button type="submit" className="btn btn-primary mx-auto col-5">Login</button>
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
