import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../api/request";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";

function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await request
      .post("/login", { email, password })
      .then((res) => {
        const decoded = jwtDecode(res.data);
        localStorage.setItem("token",res.data);
        setUser(decoded);
        navigate("/home");
      })
      .catch((error) => {

        console.log(error)
        // toast.error(error.response.data);
      });
  };



  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token){
      navigate('/home')
    }
  },[])


  return (
    <>
      <div className="login relative">
        <div className="card p-2 py-3" style={{ width: "28rem" }}>
          <div className="card-body">
            <div className="text-center">
              <h1 className="mb-3">
                Welcome To{" "}
                <span style={{ color: "#902bff", textDecoration: "underline" }}>
                  Crowdly
                </span>
              </h1>
            </div>
            <form onSubmit={handleLogin} className="form mt-4">
              <div className="input-group-lg">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="mt-3 input-group-lg">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button type="submit" className="btn btn-dark mt-4 w-100 btn-lg">
                Login
              </button>
              <p className="card-text mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="card-link">
                  Create a account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
          style: {
            fontSize: 14,
          },
        }}
      />
    </>
  );
}

export default Login;
