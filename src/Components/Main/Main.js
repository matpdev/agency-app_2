import React from "react";
import "./Main.css";
import { Carousel } from "react-carousel-minimal";
import { TextFile } from "../../Data/textFile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCoffee, faDesktop, faPenNib, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="Main-Content">
      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
            className="Corousel"
            data={data}
            time={2000}
            slideNumber={false}
            width="1000px"
            height="500px"
            captionStyle={captionStyle}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="transparent"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
              maxWidth: "1000px",
              maxHeight: "500px",
              margin: "0px auto 20px auto",
            }}
          />
        </div>
      </div>
      <div className="Main">
        <div className="Divisor"></div>
        <div className="Certification">
          <ul className="Certification-List">
            <li>
              <div className="Certification-circle">
              <FontAwesomeIcon icon={faBullseye} className="icon" />
              {/* <i class="fas fa-bullseye"></i> */}
              </div>
              <h3><strong>Habilidades</strong></h3>
              <h5>Habilidades garantidas, para transformar a sua ideia em <strong>arte!</strong></h5>
            </li>
            <li>
              <div className="Certification-circle">
              <FontAwesomeIcon icon={faThumbsUp} className="icon" />
              </div>
              <h3><strong>Confiança</strong></h3>
              <h5>Estamos aqui para garantir que nossas artes, te façam garantir mais clientes para o seu <strong>negócio!</strong></h5>
            </li>
            <li>
              <div className="Certification-circle">
              <FontAwesomeIcon icon={faDesktop} className="icon" />
              </div>
              <h3><strong>Habilidades</strong></h3>
              <h5>Habilidades garantidas, para transformar a sua ideia em <strong>arte!</strong></h5>
            </li>
            <li>
              <div className="Certification-circle">
              <FontAwesomeIcon icon={faPenNib} className="icon" />
              </div>
              <h3><strong>Habilidades</strong></h3>
              <h5>Habilidades garantidas, para transformar a sua ideia em <strong>arte!</strong></h5>
            </li>
          </ul>
          <div className="Divisor"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
