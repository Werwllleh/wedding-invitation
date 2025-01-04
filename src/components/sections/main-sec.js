import React from 'react';
import {formatDate} from "@/functions/formatDate";



const MainSec = () => {

  return (
    <section className="main-section">
      <div className="main-section__text">
        <h1 className="main-section__title h-title">Алексей и&nbsp;Анастасия</h1>
        <h4 className="main-section__date">
          {formatDate(process.env.NEXT_PUBLIC_DATE || '2025-08-10T00:00:00', 'DD-MMMM-YYYY')}
        </h4>
      </div>
      <div className="main-section__bg">
        <video className="main-section__video" loop={true} muted={true} autoPlay={true} src="/video/wedding-video.mp4"
               type="video/mp4"></video>
      </div>
    </section>
  );
};

export default MainSec;
