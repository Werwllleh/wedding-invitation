import React from 'react';
import {formatDate} from "@/functions/formatDate";

const DescriptionsSec = () => {
  return (
    <section className="descriptions-sec">
      <div className="container">
        <div className="descriptions-sec__body">
          <div className="descriptions-sec__info">
            <h2 className="descriptions-sec__title h-title sec-title">Дорогие гости</h2>
            <p className="descriptions-sec__text text">В нашей жизни предстоят счастливые перемены! Мы хотим, чтобы в этот
              день рядом с нами были самые близкие и дорогие для нас люди. Будем рады разделить с вами чудесный праздник
              в день нашей свадьбы.</p>
            <span className="descriptions-sec__date">{formatDate(process.env.NEXT_PUBLIC_DATE || '2025-08-10T00:00:00', 'DD.MM.YYYY')}</span>
          </div>
          <div className="descriptions-sec__photos">
            <img src="/photo/ds-1.jpg" alt=""/>
            <img src="/photo/ds-2.jpg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionsSec;
