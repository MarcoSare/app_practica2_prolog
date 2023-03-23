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
            <li className="nav_list_li">ACTIVIDAD</li>
            <li className="nav_list_li">INOVACIÓN</li>
            <li className="nav_list_li">ETICA E INTEGRIDAD</li>
            <li className="nav_list_li">CONTACT</li>
          </ul>

          <div className="nav_section">
            <div className="div_input_text">
              <i className="fa-solid fa-magnifying-glass input_icon"></i>
              <input type="text" className="input_text" placeholder="Search..." />
            </div>
          </div>

          <div className="nav_section nav_section_btn">
            <a href="#" className="btn"> Join us </a>
          </div>
        </div>
        <div className="nav_section nav_btn">
          <a href="#" className="btn"> Join us </a>
        </div>

        <div className="nav_section nav_section_bars">
          <i className="fa-solid fa-bars icon_bars" id="toggle_menu"></i>
        </div>
      </nav>
    </header>
    );
}