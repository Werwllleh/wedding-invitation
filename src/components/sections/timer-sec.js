'use client';
import React, {useRef} from 'react';
import Timer from "@/components/timer";
import {motion} from 'framer-motion';
import useIsVisible from '@/functions/useIsVisible';
import dayjs from "dayjs";

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
          {dayjs().isBefore(process.env.NEXT_PUBLIC_DATE) && (
            <>
              <h2 className="timer-sec__title sec-title">До свадьбы осталось</h2>
              <div className="timer-sec__timer">
                <Timer/>
              </div>
            </>
          )}
          {dayjs().isSame(process.env.NEXT_PUBLIC_DATE, 'day') && (
            <h2 className="timer-sec__title sec-title">Мероприятие в самом разгаре!</h2>
          )}
          {dayjs().isAfter(process.env.NEXT_PUBLIC_DATE, 'day') && (
            <h2 className="timer-sec__title sec-title">Свадьба состоялась!</h2>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default TimerSec;
