import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://onlinecarrenting.azurewebsites.net/api/v1/Accounts/Login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setEmail()
      setPassword()
      navigate("/");
    } catch (error) {
      return setError(error.response.data.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate("/");
    }
  });

  return (
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form">
        <p>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              setError();
            }}
          />
        </p>
        <p>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
              setError();
            }}
          />

        </p>
          {error && <div className="validation">{error}</div>}
        <p>
          <input
            type="submit"
            id="login"
            value="Login"
            onClick={submitHandler}
          />
        </p>
      </form>
      <div id="create-account-wrap">
        <p>
          Not a member? <a href="/register">Create Account</a>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Login;
