import React from 'react';
import Link from "next/link";

const Location = () => {
  return (
    <div className="location">
      <div className="location__info">
        <h2 className="location__title sec-title">Локация</h2>
        <div className="location__text">
          <p className="text">Торжество будет проходить в VERONA-HALL. В нашем распоряжении будет красивейший зал со светлым интерьером, высокими потолками и круглыми столами.</p>
          <p className="text">Находится зал по адресу: г. Чебоксары, проспект Максима Горького, 2М</p>
        </div>
        <Link target="_blank"
              href="https://yandex.ru/maps/45/cheboksary/?ll=47.209938%2C56.149375&mode=poi&poi%5Bpoint%5D=47.209917%2C56.149615&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D70330954140&z=19"
              className="location__button style-btn">Показать на карте</Link>
      </div>
      <div className="location__bg">
        <img src="/photo/verona.webp" alt="verona hall"/>
      </div>
    </div>
  );
};

export default Location;
