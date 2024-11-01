import React from 'react';
import './Styles/Main.css';
import itemsdata from './items.json';
import image from './image1.jpg'

function Main() {
  return (
    <div className="real-main">
      <div className="goods-list">
        {itemsdata.goods.map((item, index) => (
          <div className="goods-item" key={index}>
            <img src={image} alt={item.name} className="goods-photo" />
            <p className="goods-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
