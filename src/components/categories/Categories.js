import React, { useState } from "react";
import "../categories/categories.css";
import cat1 from "../../img/categories/cat1.jpeg";
import cat2 from "../../img/categories/cat2.jpeg";
const dummyData = [
  {
    id: "1",
    title: "Su & İçecek",
    image: cat1,
  },
  {
    id: "2",
    title: "Meyve & Sebze",
    image: cat2,
  },
  {
    id: "3",
    title: "Fırından",
    image: cat1,
  },
  {
    id: "4",
    title: "Atıştırmalık",
    image: cat1,
  },
  {
    id: "5",
    title: "Dondurma",
    image: cat1,
  },
  {
    id: "6",
    title: "Süt Ürünleri",
    image: cat1,
  },
  {
    id: "7",
    title: "Kahvaltılık",
    image: cat1,
  },
  {
    id: "8",
    title: "Yiyecek",
    image: cat1,
  },
  {
    id: "9",
    title: "Ev Bakım",
    image: cat1,
  },
  {
    id: "10",
    title: "Teknoloji",
    image: cat1,
  },
  {
    id: "11",
    title: "Bebek",
    image: cat1,
  },
  {
    id: "12",
    title: "Cinsel Sağlık",
    image: cat1,
  },
  {
    id: "13",
    title: "Cinsel Sağlık",
    image: cat1,
  },
  {
    id: "14",
    title: "Cinsel Sağlık",
    image: cat1,
  },
  {
    id: "15",
    title: "Cinsel Sağlık",
    image: cat1,
  },
];

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-wrapper">
        <h6>Kategoriler</h6>
        <div className="categories-container">
          {dummyData.map((item) => (
            <div className="categories-box">
              <img src={item.image}></img>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
