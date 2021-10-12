import React from "react";
import "./Header.css";
import '../Styles/hover.css'
import Logo from "../../Data/logo";

const Header = () => {
  return (
    <div className="Header">
      <div className="div">
        <a href="#">
          <Logo></Logo>
        </a>
      </div>
      <div className="Header-nav">
        <ul>
          <li>
            <a href="#" className="hvr-grow">Home</a>
          </li>
          <li>
            <a href="#" className="hvr-grow">Portifolio</a>
          </li>
          <li>
            <a href="#" className="hvr-grow">Biografia</a>
          </li>
          <li>
            <a href="#" className="hvr-grow  ">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
