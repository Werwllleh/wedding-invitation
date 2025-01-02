"use client";
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const deadline = new Date(process.env.NEXT_PUBLIC_DATE || '2025-08-10T00:00:00');

  // Состояния для таймера
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // Функция склонения числительных
  const declensionNum = (num, words) => {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  };

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = Math.max(0, deadline - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    // Запуск таймера
    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    // Очистка таймера при размонтировании компонента
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="timer">
      <div className="timer__item timer__days" data-title={declensionNum(parseInt(timeLeft.days, 10), ['день', 'дня', 'дней'])}>
        {timeLeft.days}
      </div>
      <div className="timer__separator">:</div>
      <div className="timer__item timer__hours" data-title={declensionNum(parseInt(timeLeft.hours, 10), ['час', 'часа', 'часов'])}>
        {timeLeft.hours}
      </div>
      <div className="timer__separator">:</div>
      <div className="timer__item timer__minutes" data-title={declensionNum(parseInt(timeLeft.minutes, 10), ['минута', 'минуты', 'минут'])}>
        {timeLeft.minutes}
      </div>
      <div className="timer__separator">:</div>
      <div className="timer__item timer__seconds" data-title={declensionNum(parseInt(timeLeft.seconds, 10), ['секунда', 'секунды', 'секунд'])}>
        {timeLeft.seconds}
      </div>
    </div>
  );
};

export default Timer;
