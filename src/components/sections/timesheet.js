import React from 'react';
import {formatDate} from "@/functions/formatDate";

const info = [
  {
    time: '2025-08-10T15:30:00',
    about: 'Сбор гостей',
    text: 'Время пролетит незаметно за игристым и общением с другими гостями'
  },
  {
    time: '2025-08-10T16:00:00',
    about: 'Торжественная церемония',
    text: 'Вы станете свидетелями создания новой семьи — нашей семьи'
  },
  {
    time: '2025-08-10T17:00:00',
    about: 'Праздничный банкет',
    text: 'Будет много танцев, веселья, поздравлений и, конечно, любви'
  },
  {
    time: '2025-08-10T22:00:00',
    about: 'Завершение торжества',
    text: 'Мы будем благодарны каждому за счастливые моменты этого дня'
  },
]

const Timesheet = () => {
  return (
    <div className="timesheet">
      <div className="container">
        <div className="timesheet__body">
          <h2 className="timesheet__title sec-title">Тайминг</h2>
          <div className="timesheet__flex">
            {info && info.length > 0 && info.map((item, index) => {
              return (
                <div key={index} className="timesheet__col">
                  <div className="timesheet__col-time">{formatDate(item.time, 'H:mm')}</div>
                  <h4 className="timesheet__col-about">{item.about}</h4>
                  <p className="timesheet__col-text text">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timesheet;