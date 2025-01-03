import React from 'react';

const details = [
  {
    title: 'Подарки',
    description: 'Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания в конвертах помогут осуществить наши мечты!',
  },
  {
    title: 'Цветы',
    description: 'Сразу после свадьбы мы улетаем в свадебное путешествие, поэтому мы не успеем насладиться красотой подаренных цветов и будем рады, если вместо цветов вы решите подарить нам бутылочку вина.',
  },
  {
    title: 'Небольшая просьба',
    description: 'От всего сердца просим вас воздержаться от криков «Горько!» и сохранить атмосферу уютного семейного праздника.',
  },
]

const DetailSec = () => {
  return (
    <div className="detail-sec">
      <div className="container">
        <div className="detail-sec__body">
          <h2 className="detail-sec__title sec-title">Детали</h2>
          <div className="detail-sec__cards">
            {details.length > 0 && details.map((card, index) => {
              return (
                <div key={index} className="detail-sec__card">
                  <div className="detail-sec__card-body">
                    <h4 className="detail-sec__card-title">{card.title}</h4>
                    <p className="detail-sec__card-text text">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSec;
