import React from "react";
import "./footer.scss";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer">
      <div className="columns-container">
        <div className="first-column">
          <h6>Getiri Getirin</h6>
          <div className="image-container">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"></img>
          </div>
          <div className="image-container">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"></img>
          </div>
          <div className="image-container">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"></img>
          </div>
        </div>

        <div className="first-column">
          <h6>Getir'i keşfedin</h6>
          <p>Hakkımızda</p>
          <p>Kariyer</p>
          <p>Teknoloji Kariyerleri</p>
          <p>İletişim</p>
          <p>Sosyal Sorumluluk Projeleri</p>
        </div>
        <div className="first-column">
          <h6>Yardıma mı ihtiyacınız var?</h6>
          <p>Sıkça Sorulan Sorular</p>
          <p>Kişisel Verilerin Korunması</p>
          <p>Gizlilik Politikası</p>
          <p>Kullanım Koşulları</p>
          <p>Çerez Politikası</p>
        </div>
        <div className="first-column">
          {" "}
          <h6>İş Ortağımız Olun</h6>
          <p>Bayimiz Olun</p>
          <p>Deponuzu Kiralayın</p>
          <p>GetirYemek Restoranı Olun</p>
          <p>GetirÇarşı İşletmesi Olun</p>
          <p>Zincir Restoranlar</p>
        </div>
        <div className="first-column">
          <div className="image-container">
            <img
              style={{ height: "60%" }}
              src="https://cdn.getir.com/getirweb-images/common/etbis.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="copyright">
        @2022 Copyright . Bilgi Toplumu Hizmetleri
        <div className="social-container">
          <IoLogoFacebook style={{ padding: "6px" }} size={22} color="gray" />
          <IoLogoTwitter style={{ padding: "6px" }} size={22} color="gray" />
          <IoLogoInstagram style={{ padding: "6px" }} size={22} color="gray" />
          <div className="social-container-lang">
            <IoGlobeOutline style={{ padding: "6px" }} size={20} color="gray" />
            <p>Türkçe(TR)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
