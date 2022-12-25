import React, { useState, useEffect } from "react";
import "./jumbotron.css";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import getir from "../../img/getir.png";
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
  let intervalTime = 4000;

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
