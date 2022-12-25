import React from "react";
import "./cards.css";
const Cards = () => {
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="card">
          <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"></img>
          <h6>Her siparişinize bir kampanya</h6>
          <p>
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
        <div className="card" style={{ marginLeft: "10px" }}>
          <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"></img>
          <h6>Her siparişinize bir kampanya</h6>
          <p>
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
        <div className="card" style={{ marginLeft: "10px" }}>
          <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"></img>
          <h6>Her siparişinize bir kampanya</h6>
          <p>
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
