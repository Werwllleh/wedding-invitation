'use client';
import React, {useRef} from 'react';
import {formatDate} from "@/functions/formatDate";
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';


const MainSec = () => {

  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <motion.section
      ref={sectionRef}
      initial={{opacity: 0}}
      animate={isVisible ? {opacity: 1} : {opacity: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="main-section"
    >
      <div className="main-section__text">
        <h1 className="main-section__title h-title">Алексей и&nbsp;Анастасия</h1>
        <h4 className="main-section__date">
          {formatDate(process.env.NEXT_PUBLIC_DATE || '2025-08-10T00:00:00', 'DD-MMMM-YYYY')}
        </h4>
      </div>
      <div className="main-section__bg">
        <video className="main-section__video" playsInline loop={true} muted={true} autoPlay={true} src="/video/wedding-video.mp4"
               type="video/mp4"></video>
      </div>
    </motion.section>
  );
};

export default MainSec;
