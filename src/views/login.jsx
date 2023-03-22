//import logo from './logo.svg';
//import './App.css';
import "../assets/styles/styles.css";
import itcLogo from "../assets/images/logo-itc.png";
import React, { useState, useEffect } from "react";
function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <section className="section-login">
      <div className="login-data container_center">
        <div className="login-form container_center">
          <img src={itcLogo} className="login-logo-itc mb-1" alt="logo itc" />
          <h2 className="">¡INICIA SESIÓN!</h2>
          <p className="mb-1">
            Enter your details to get started <br />
            your computer equipment control system
          </p>
          <div className="div_input_text mb-05">
            <input className="input_text" type="text" placeholder="email" />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="div_input_text mb-1">
            <input
              className="input_text"
              type={showPass ? "text" : "password"}
              placeholder="password"
              id="txt_password"
            />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="container_center login_show_pass mb-2">
            <input
              className="input_check_box mr-1"
              type="checkbox"
              onClick={() => setShowPass(!showPass)}
            />
            <p>Show password</p>
          </div>
          <input className="btn" type="button" value="Login" />
        </div>
      </div>
      <div className="login-img"></div>
    </section>
  );
}

export default Login;
