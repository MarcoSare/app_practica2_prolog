import React from "react";
import "../assets/styles/styles.css";
import itcLogo from "../assets/images/logo-itc.png";
export const NavBar = ()=>{
    return (
<header className="header">
      <nav className="nav">
        <div className="nav_section">
          <div className="nav_section">
            <img src={itcLogo} alt="logo" className="nav_logo" />
          </div>
        </div>
        <div className="nav_section nav_section_list">
          <ul className="nav_list">
            <a href="/admin/dashBoard" className="nav_list_li">Home</a>
            <a href="/admin/users" className="nav_list_li">Users</a>
            <a  href="/admin/compus" className="nav_list_li">Computers</a>
            <a  href="/admin/depas" className="nav_list_li">Departamentos</a>
            <a href="/admin/report" className="nav_list_li">Reporte</a>
          </ul>

          <div className="nav_section">
            <div className="div_input_text">
              <i className="fa-solid fa-magnifying-glass input_icon"></i>
              <input type="text" className="input_text" placeholder="Search..." />
            </div>
          </div>

        </div>
        <div className="nav_section nav_btn">
           <a href="/" className="btn-logout">Salir</a>
        </div>

        <div className="nav_section nav_section_bars">
          <i className="fa-solid fa-bars icon_bars" id="toggle_menu"></i>
        </div>
      </nav>
    </header>
    );
}