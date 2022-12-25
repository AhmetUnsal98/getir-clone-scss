import React from "react";
import Navbar from "../components/navbar/Navbar";
import Jumbotron from "../components/jumbotron/Jumbotron";
import Categories from "../components/categories/Categories";
import Campaigns from "../components/campaigns/Campaigns";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "auto",
      }}
    >
      <Navbar />
      <Jumbotron />
      <Categories />
      <Campaigns />
      <Footer />
    </div>
  );
};

export default HomePage;
