import React from "react";
import "./Main.css";
import Prices from "../Prices/Prices";
import GalleryP from "../Gallery/Gallery";
import Logo from "../../Data/logo";
import { TextFile } from "../../Data/textFile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faBullseye,
  faCoffee,
  faDesktop,
  faPenNib,
  faPoll,
  faThumbsUp,
  faUser,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Example from "../TextScramble/TextScramble";
import Carroulsel from "../Carroulsel/Carroulsel";

const Main = () => {
  return (
    <div className="Main-Content">
      <Carroulsel />
      <div className="Main">
        <div className="Divisor"></div>
        <div className="Certification">
          <div className="Certification-text">
            <h2>
              A imagem da sua empresa é tudo, você decide como ela <br />
              deve ser vista, nós mostramos como
            </h2>
            <h4>
              Ajudamos nossos clientes a construírem marcas fortes e desejadas
              no mercado através <br />
              de nossos serviços de Gestão da Marca / Branding, Marketing
              Digital, <br />
              Criação de Conteúdo, Criação de Sites, Consultoria em SEO e Redes
              Sociais.
            </h4>
          </div>
          <ul className="Certification-List">
            <li>
              <div className="Certification-circle">
                <FontAwesomeIcon icon={faUserFriends} className="icon" />
              </div>
              <h3>
                <strong>Redes Sociais</strong>
              </h3>
              <h5>
              Mais do que apenas gerenciamento, trabalhamos com o principal objetivo: {" "}
                <strong>Gerar resultado e reconhecimento para a sua empresa.</strong>
              </h5>
            </li>
            <li>
              <div className="Certification-circle">
                <FontAwesomeIcon icon={faBullhorn} className="icon" />
              </div>
              <h3>
                <strong>Marketing</strong>
              </h3>
              <h5>
              Solucionamos seus desafios e aceleramos seu negócio através de estratégias de Marketing Digital criadas para <strong>converter seus clientes.</strong>
              </h5>
            </li>
            <li>
              <div className="Certification-circle">
                <FontAwesomeIcon icon={faPoll} className="icon" />
              </div>
              <h3>
                <strong>Gestão de Tráfego</strong>
              </h3>
              <h5>
              Precisa divulgar sua marca e alcançar resultados em um curto período? {" "}
                <strong>Conheça nossas soluções em Links Patrocinados com o Google Ads.</strong>
              </h5>
            </li>
            <li>
              <div className="Certification-circle">
                <FontAwesomeIcon icon={faPenNib} className="icon" />
              </div>
              <h3>
                <strong>Design Gráfico</strong>
              </h3>
              <h5>
              Trabalhamos com todo o posicionamento da sua marca, desde a criação de um nome até a comunicação que ela deseja{" "}
                <strong>passar ao público.</strong>
              </h5>
            </li>
          </ul>

          <div className="Divisor"></div>
          <Prices></Prices>
          <div className="Divisor"></div>
        </div>
        <div>
          <GalleryP></GalleryP>
        </div>
      </div>
      <div className="TextScramble">
        <div className="Footer">
          <div className="Footer-Text">
            <div>
              <svg
                className="Logo-Footer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 770.34 522.05"
              >
                <polygon points="552.47 300.62 770.34 522.05 566.36 0 385.17 432.48 203.98 0 0 522.05 217.87 300.62 137.79 366.24 71.95 421.65 204.97 81.23 385.12 511.23 565.38 81.23 698.39 421.65 632.55 366.24 552.47 300.62" />
              </svg>
            </div>
            <p>
              Nós criamos artes, ideias, para mostrar <br /> ao mundo{" "}
              <strong>a sua marca!</strong>
            </p>
          </div>
          <div className="Footer-Text">
            <h2>Explore</h2>
            <a href="#">Home</a>
            <a href="#">Portifólio</a>
            <a href="#">Biografia</a>
            <a href="#">Contato</a>
          </div>
          <div className="Footer-Text">
            <h2>Contato</h2>
            <a href="#">(84) 99463-3769</a>
            <a href="#">matheus2ep@gmail.com</a>
            <a href="#">matheusp.design@gmail.com</a>
          </div>
          <div className="Footer-Text">
            <h2>Redes Sociais</h2>
            <a href="#">Email</a>
            <a href="#">Instagram</a>
            <a href="#">Whastapp</a>
          </div>
          <div className="Divisor-V"></div>
          <div className="Footer-Text">
            <h2>Termos</h2>
            <a href="#">Uso</a>
            <a href="#">Condições</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
