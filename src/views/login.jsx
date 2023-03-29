//import logo from './logo.svg';
//import './App.css';
import "../assets/styles/styles.css";
import itcLogo from "../assets/images/logo-itc.png";
import loading from "../assets/images/Loading.gif";
import React, { useState, useEffect } from "react";
import loginUser from "../services/loginUser";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  let path;

  let navigate = useNavigate();

  const changePass = (value) => {
    setPassword(value);
    if (
      value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ||
      value === ""
    ) {
      setIsEmail(true);
      console.log("true");
    } else {
      setIsEmail(false);
      console.log("false");
    }
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try{
        //console.log('Email: ' + email);
        //console.log('Password: ' + password);
        const res = await loginUser.veriUser(email, password);
        //console.log('RES: ' + res);
        
        if(res.status===200){
          
          const user = await res.json();

          console.log(user.email, user.password);

          if (email == user.email && password == user.password){        
            switch (user.type){
              case 'admin':
                path = `admin/dashBoard`; 
                navigate(path);
                break;
              case 'support':
                localStorage.setItem("support", user._id);
                path = `support/dashBoard`; 
                navigate(path);
                break;
              default:
                path = `user`; 
                navigate(path);
            }
          }
          else{
            alert("Datos incorrectos: Verifica tus datos.");
            setIsLoading(false)
          }
        }else{
          alert("Error")
          setIsLoading(false)
        }
    }
    catch(error){
        alert('critical error: ' + error);
    }
  }

  return (
    <section className="section-login">
      <div className="login-data container_center">
        <div className="login-form container_center">
          <img src={isLoading? loading:itcLogo} className="login-logo-itc mb-1" alt="logo itc" />
          <h2 className="">¡INICIA SESIÓN!</h2>
          <p className="mb-1">
            Enter your details to get started <br />
            your computer equipment control system
          </p>
          <form onSubmit={handleLogin}>
            <div className="div_input_text mb-05">
              <input
                id="txtEmail"
                className={isEmail ? "input_text" : "input_text_error"}
                type="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="div_input_text mb-1">
              <input
                id="txt_password"
                className="input_text"
                type={showPass ? "text" : "password"}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
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
            <input type="submit" className="btn" value="LOGIN"/>
          </form>
        </div>
      </div>
      <div className="login-img"></div>
    </section>
  );
}

export default Login;
