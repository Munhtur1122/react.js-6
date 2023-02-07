import React from "react";
import cardData from "../../data/card";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = cardData.map((card) => {
    return (
      <div key={card.id}>
        <img className="w-[200px] h-[400px]" src={card.img} />
        <h2 className="">{card.name}</h2>
        <Link to={`/detail/${card.id}`}>Дэлгэрэнгүй</Link>
      </div>
    );
  });
  return (
    <div>
      <div className="ml-[10px]">{cards}</div>
    </div>
  );
};

export default Home;
