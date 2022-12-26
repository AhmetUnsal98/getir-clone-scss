import React from "react";
import Cards from "../cards/Cards";
import "./campaigns.scss";

const Campaigns = () => {
  return (
    <div className="campaigns">
      <div className="campaigns-wrapper">
        <h6>Kampanyalar</h6>
        <div className="campaigns-container">
          <div className="campaigns-box">
            <img src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"></img>
          </div>
          <div className="campaigns-box">
            <img src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg"></img>
          </div>
          <div className="campaigns-box">
            <img src="https://cdn.getir.com/misc/611e4a50c270af509cd486b5_banner_tr_1629375115516.jpeg"></img>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Campaigns;
