import React, { useState, useEffect } from "react";
import "./jumbotron.scss";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import getir from "../../img/getir.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

const dummyData = [
  {
    id: "1",
    image: image1,
  },
  {
    id: "2",
    image: image2,
  },
  {
    id: "3",
    image: image3,
  },
];

const Jumbotron = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = 3;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="jumbotron">
      <div className="jumbotron-mobile">
        <div className="jumbotron-mobile-header">
          <h4>getir</h4>
        </div>
        <div className="jumbotron-mobile-address-container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IoLocationSharp size={15} color="rgb(76, 51, 152)" />{" "}
            <p>Teslimat Adresini Belirle</p>
          </div>
          <IoArrowForwardOutline
            style={{ marginRight: "6px" }}
            size={15}
            color="rgb(76, 51, 152)"
          />
        </div>
        <div className="jumbotron-mobile-campaign">
          <img src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"></img>
        </div>
      </div>
      <div className="jumbotron-main-container">
        <div
          className="jumbotron-slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {dummyData.map((item) => (
            <div
              className="jumbotron-inner-container"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(93,62,188,1) 8%, rgba(0,0,0,0) 78%),url(${item.image})`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="jumbotron-inner-left-container">
        <img src={getir}></img>
        <h1>Dakikalar İçinde Kapınızda</h1>
      </div>
      <div className="jumbotron-inner-right-container">
        <p> Giriş yap veya kayıt ol</p>
        <div>
          <select className="jumbotron-input-flag">
            <option style={{ textAlign: "center" }}>+90</option>
          </select>
          <input
            className="jumbotron-input-number"
            type="phone"
            placeholder="Telefon Numarası"
          ></input>
        </div>
        <button>Telefon numarası ile devam et</button>
      </div>
    </div>
  );
};

export default Jumbotron;
