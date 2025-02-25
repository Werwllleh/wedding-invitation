'use client';
import React, {useRef} from 'react';
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';

const details = [
  {
    title: 'Подарки',
    description: 'Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания в конвертах помогут осуществить наши мечты!',
  },
  {
    title: 'Про цветы',
    description: 'В этот день для нас важнее всего ваши теплые пожелания и радость, которой вы с нами поделитесь. Если вы захотите сделать небольшой подарок, пусть это будет что-то, что останется с нами надолго.',
  },
  {
    title: 'Небольшая просьба',
    description: 'Обратите внимание, что формат мероприятия не предполагает детской площадки и аниматоров. Пожалуйста, позаботьтесь о том, чтобы провести этот вечер без детей.',
  },
]

const DetailSec = () => {

  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <motion.section
      ref={sectionRef}
      initial={{opacity: 0}}
      animate={isVisible ? {opacity: 1} : {opacity: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="detail-sec"
    >
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
    </motion.section>
  );
};

export default DetailSec;
