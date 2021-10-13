import React from "react";
import "./Header.css";
import "../Styles/hover.css";
import Logo from "../../Data/logo";

const Header = () => {
  return (
    <>
      <div className="Header">
        {/* Header Logo */}
        <div className="div">
          <a href="#">
            <Logo></Logo>
          </a>
        </div>
        {/* Header Nav */}
        <div className="Header-nav">
          <ul>
            <li>
              <a href="#" className="hvr-grow">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hvr-grow">
                Portifolio
              </a>
            </li>
            <li>
              <a href="#" className="hvr-grow">
                Biografia
              </a>
            </li>
            <li>
              <a href="#" className="hvr-grow  ">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <button className="cross">M</button>
      </div>
      <div className="menu">
        <ul>
          <a href="#">
            <li>LINK ONE</li>
          </a>
          <a href="#">
            <li>LINK TWO</li>
          </a>
          <a href="#">
            <li>LINK THREE</li>
          </a>
          <a href="#">
            <li>LINK FOUR</li>
          </a>
          <a href="#">
            <li>LINK FIVE</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Header;
