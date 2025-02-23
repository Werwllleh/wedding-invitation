'use client';
import React, {useRef} from 'react';
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';

const colors = [
  {
    title: 'white',
    hex: '#ffffff',
  },
  {
    title: 'green',
    hex: '#508E75FF',
  },
  {
    title: 'black',
    hex: '#20252C',
  },
]

const DressCodeSec = () => {

  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <motion.section
      ref={sectionRef}
      initial={{opacity: 0}}
      animate={isVisible ? {opacity: 1} : {opacity: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="dress-code-sec"
    >
      <div className="container">
        <div className="dress-code-sec__body">
          <h2 className="dress-code-sec__title sec-title">Дресс-код</h2>
          <div className="dress-code-sec__content">
            <p className="dress-code-sec__description text">Мы очень старались сделать праздник красивым и будем рады,
              если в своих нарядах вы поддержите цветовую гамму нашей свадьбы:</p>
            <div className="dress-code-sec__colors">
              {colors.length > 0 && colors.map((color) => {
                return (
                  <div key={color.title} style={{backgroundColor: color.hex}} className="dress-code-sec__color"></div>
                )
              })}
            </div>
            <div className="dress-code-sec__photos">
              <img src="/photo/dc-1.webp" alt=""/>
              <img src="/photo/dc-2.webp" alt=""/>
              <img src="/photo/dc-3.webp" alt=""/>
              <img src="/photo/dc-4.webp" alt=""/>
              <img src="/photo/dc-5.webp" alt=""/>
            </div>
            <div className="dress-code-sec__about">
              <div className="dress-code-sec__about-item">
                <h5 className="dress-code-sec__about-title">Девушки</h5>
                <p className="dress-code-sec__about-text">Вечерние платья, костюмы, юбки, блузки. Приветствуются
                  аксессуары в палитре торжества.</p>
              </div>
              <div className="dress-code-sec__about-item">
                <h5 className="dress-code-sec__about-title">Мужчины</h5>
                <p className="dress-code-sec__about-text">Рубашка / футболка, брюки и пиджак. Лоферы, мокасины или белые
                  кроссовки.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DressCodeSec;
