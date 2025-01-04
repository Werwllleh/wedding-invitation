'use client';
import React, {useRef} from 'react';
import Timer from "@/components/timer";
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';

const TimerSec = () => {

  const sectionRef = useRef(null);
  const isVisible = useIsVisible(sectionRef);


  return (
    <motion.section
      ref={sectionRef}
      initial={{opacity: 0}}
      animate={isVisible ? {opacity: 1} : {opacity: 0}}
      transition={{duration: 0.6, ease: 'easeOut'}}
      className="timer-sec"
    >
      <div className="container">
        <div className="timer-sec__body">
          <h2 className="timer-sec__title sec-title">До свадьбы осталось</h2>
          <div className="timer-sec__timer">
            <Timer/>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TimerSec;
