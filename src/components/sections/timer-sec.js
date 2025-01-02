import React from 'react';
import Timer from "@/components/timer";

const TimerSec = () => {
  return (
    <section className="timer-sec">
      <div className="container">
        <div className="timer-sec__body">
          <h2 className="timer-sec__title sec-title">До свадьбы осталось</h2>
          <div className="timer-sec__timer">
            <Timer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerSec;
