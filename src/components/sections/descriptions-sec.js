'use client';
import React, {useRef} from 'react';
import {formatDate} from "@/functions/formatDate";
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';

const DescriptionsSec = () => {

  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <motion.section
      ref={sectionRef}
      initial={{opacity: 0}}
      animate={isVisible ? {opacity: 1} : {opacity: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="descriptions-sec"
    >
      <div className="container">
        <div className="descriptions-sec__body">
          <div className="descriptions-sec__info">
            <h2 className="descriptions-sec__title h-title sec-title">Дорогие гости</h2>
            <p className="descriptions-sec__text text">
              В&nbsp;нашей жизни начинается новый этап, и&nbsp;мы&nbsp;мечтаем разделить этот особенный день
              с&nbsp;самыми
              близкими и&nbsp;дорогими людьми. <br/><br/> С&nbsp;огромной
              радостью <span>приглашаем&nbsp;Вас</span> на&nbsp;нашу свадьбу, чтобы вместе создать
              теплые воспоминания, наполненные радостью и&nbsp;искренними эмоциями. Будем счастливы видеть Вас
              среди
              гостей этого прекрасного праздника!
            </p>
            <span className="descriptions-sec__date">
              {formatDate(process.env.NEXT_PUBLIC_DATE, 'DD.MM.YYYY')}
            </span>
          </div>
          <div className="descriptions-sec__photos">
            <img src="/photo/ds-1.webp" alt=""/>
            <img src="/photo/ds-2.webp" alt=""/>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DescriptionsSec;
