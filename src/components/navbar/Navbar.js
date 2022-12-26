import React, { useState } from "react";
import "./navbar.scss";
import { IoGlobeOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-left-container">
          <div className="navbar-item">
            <div className="navbar-item-hover-container active"></div>
            <p>getir</p>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-hover-container"></div>
            <p>getiryemek</p>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-hover-container"></div>
            <p>getirbüyük</p>
          </div>
          <div className="navbar-item">
            <div className="navbar-item-hover-container"></div>
            <p>getirsu</p>
          </div>
        </div>
        <div className="navbar-right-container">
          <div className="navbar-item">
            <IoGlobeOutline color="white" size={20} />
            <span>Türkçe (TR)</span>
          </div>
          <div className="navbar-item">
            <IoPerson color="white" size={20} />
            <span>Giriş yap</span>
          </div>
          <div className="navbar-item">
            <IoPersonAdd color="white" size={20} />
            <span>Kayıt ol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
